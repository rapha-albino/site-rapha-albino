# Direção de imagens e inventário inicial

## Princípio

As imagens devem dar corpo à presença de Raphael, não ilustrar uma ideia abstrata de consultoria. A prioridade é usar retratos e registros reais já existentes no site atual, complementados por capas de livros e imagens editoriais quando necessárias.

## Fotos candidatas do site atual

| Uso proposto | Arquivo atual | Observação |
| --- | --- | --- |
| Retrato de abertura | `https://rapha-albino.com.br/wp-content/uploads/2025/01/foto-albino.jpg` | Retrato quadrado. Candidato principal para a Home. |
| Trabalho e fala pública | `https://rapha-albino.com.br/wp-content/uploads/2025/01/foto_2023_2-800x1200.jpg` | Raphael explicando algo. Candidato para Prática ou Trajetória. |
| Trajetória | `https://rapha-albino.com.br/wp-content/uploads/2025/01/img-site-sobre-800x1046.png` | Imagem hoje usada na página Sobre. Avaliar resolução e recorte. |
| Ensino ou contexto de trabalho | `https://rapha-albino.com.br/wp-content/uploads/2022/02/IMG-20190921-WA0014.jpg` | Uso aprovado. Registro de aula para sustentar a dimensão coletiva do ensino. |

## Imagens a tratar com cuidado

- Fotos genéricas de banco, usadas hoje para “empresas digitais” e “jornada de mudança”, não devem estruturar a nova identidade visual.
- Logos de clientes só entram se houver autorização atual e função editorial clara.
- Imagens destacadas dos posts devem ser migradas com os respectivos textos; isso não significa que todas devam aparecer na Home.
- Capas dos três livros devem vir das fontes oficiais dos sites ou editoras, mantendo autoria e qualidade de reprodução.

## Migração do blog

O arquivo de posts traz 19 imagens destacadas e 18 imagens internas. Elas foram registradas em `content/wordpress-media-inventory.json` junto de URL, texto alternativo disponível, post de origem e papel da imagem.

Na implementação, essas imagens devem ser baixadas para o novo repositório e servidas localmente. Até lá, os Markdown preservam os URLs originais para não perder referência de origem.

## Arquivos locais

As quatro fotos candidatas foram copiadas para `assets/images/`, com origem, uso previsto e status registrados em `assets/images/README.md`. A implementação deve gerar derivados responsivos a partir desses originais.

## Próxima curadoria visual

1. Abrir e avaliar os quatro retratos ou registros candidatos em desktop e celular.
2. Escolher um retrato principal para a Home e duas imagens de apoio.
3. Confirmar quais logos de clientes podem continuar públicos.
4. Complementar somente as lacunas reais com imagens novas, nunca com banco de imagens genérico por padrão.
