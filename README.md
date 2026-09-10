# Raphael Albino

Repositório do site pessoal de Raphael Albino.

## Direção inicial

O site será a casa pública de uma prática que une sistemas, pessoas e transformação. Ele apresentará a trajetória, a produção atual e as formas de colaborar de Raphael como autor, professor e consultor.

> Sou autor, professor e consultor. Ajudo pessoas e organizações a dar sentido a sistemas complexos, ganhar clareza sobre o que importa e desenhar intervenções que mudem a prática.

## Status

Arquitetura editorial definida em [mapa-editorial.md](mapa-editorial.md), material existente mapeado em [inventario-conteudo.md](inventario-conteudo.md), recorte da primeira versão em [primeira-versao.md](primeira-versao.md), hipótese da página Prática em [pratica.md](pratica.md), trajetória em [trajetoria.md](trajetoria.md), direção de imagens em [midias.md](midias.md) e curadoria inicial da Home em [curadoria-home.md](curadoria-home.md).

## Desenvolvimento

Site estático em Astro. Execute `npm install`, `npm run dev`, `npm run build` ou `npm run test:e2e`.

## Ambientes e publicação

- **Homologação:** Vercel, em `https://site-rapha-albino.vercel.app`. É o ambiente para revisão antes de publicar.
- **Produção:** Umbler, em `https://rapha-albino.com.br`.

Depois de revisar a homologação, publique a mesma versão na produção com:

```bash
npm run deploy:production
```

O script gera `dist/` e sincroniza os arquivos estáticos via SSH. Os diretórios legados do WordPress permanecem excluídos até a Umbler removê-los.
