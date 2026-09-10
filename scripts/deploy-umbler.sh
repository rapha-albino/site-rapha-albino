#!/usr/bin/env sh
set -eu

# Umbler is the production environment. Build first, then synchronize only
# generated static files. The legacy WordPress directories remain excluded
# until they can be removed by the hosting provider.
HOST="${UMBLER_HOST:-ssh-rapha-albino-com-br@rapha-albino-com-br.umbler.net}"
PORT="${UMBLER_PORT:-9922}"
KEY="${UMBLER_SSH_KEY:-$HOME/.ssh/id_ed25519_umbler_rapha_albino}"
TARGET="${UMBLER_TARGET:-public/}"

npm run build
rsync -az --delete-delay \
  --exclude="temporary.html" \
  --exclude="wp-content/" \
  --exclude="wp-includes/" \
  -e "ssh -i $KEY -p $PORT -o BatchMode=yes" \
  dist/ "$HOST:$TARGET"
