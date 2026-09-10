#!/usr/bin/env sh
set -eu

# Umbler is production. Its post-receive hook checks out the Git branch into
# public/, so this script publishes the generated static site, never the Astro
# source tree.
HOST="${UMBLER_HOST:-ssh-rapha-albino-com-br@rapha-albino-com-br.umbler.net}"
PORT="${UMBLER_PORT:-9922}"
KEY="${UMBLER_SSH_KEY:-$HOME/.ssh/id_ed25519_umbler_rapha_albino}"
REMOTE="${UMBLER_GIT_REMOTE:-ssh://$HOST:$PORT/home/rapha-albino.com.br/git/rapha-albino-com-br.git}"
GIT_DIR="${UMBLER_GIT_DIR:-git/rapha-albino-com-br.git}"
RELEASE_DIR="$(mktemp -d)"
trap 'rm -rf "$RELEASE_DIR"' EXIT

npm run build
cp -R dist/. "$RELEASE_DIR/"
git -C "$RELEASE_DIR" init --quiet --initial-branch=master
git -C "$RELEASE_DIR" add --all
git -C "$RELEASE_DIR" -c user.name="Raphael Albino deploy" -c user.email="deploy@rapha-albino.com.br" commit --quiet -m "Publish static site"
GIT_SSH_COMMAND="ssh -i $KEY -o BatchMode=yes" git -C "$RELEASE_DIR" push --force "$REMOTE" master:master
ssh -i "$KEY" -o BatchMode=yes -p "$PORT" "$HOST" "GIT_WORK_TREE=\"\$HOME/public\" git --git-dir=\"\$HOME/$GIT_DIR\" checkout -f master"
