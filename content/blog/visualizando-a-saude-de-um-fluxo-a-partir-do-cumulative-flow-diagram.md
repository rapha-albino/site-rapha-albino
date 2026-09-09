---
title: "Visualizando a saúde de um fluxo de trabalho a partir do CFD"
publishedAt: "2022-04-10T13:42:17"
modifiedAt: "2022-04-10T13:42:17"
slug: "visualizando-a-saude-de-um-fluxo-a-partir-do-cumulative-flow-diagram"
sourceUrl: "https://rapha-albino.com.br/visualizando-a-saude-de-um-fluxo-a-partir-do-cumulative-flow-diagram/"
wordpressId: 1250
featuredImage: "https://rapha-albino.com.br/wp-content/uploads/2022/04/pexels-pixabay-355288-scaled-e1737138780621.jpg"
featuredImageAlt: "Imagem de um fluxo"
---

Uma das questões que uma pessoa Agile Coach pode enfrentar durante sua carreira é: como posso ajudar a equipe a melhorar continuamente o fluxo de trabalho?

Neste blog post, apresentarei uma valiosa técnica para que você compreenda de forma holística o fluxo de uma equipe.

## CFD

Segundo [Brodzinski](http://brodzinski.com/2013/07/cumulative-flow-diagram.html), **Cumulative Flow Diagram** (CFD) é um dos gráficos que oferece rápida visão geral do que está acontecendo num projeto ou produto.

Ao usá-lo, você verificará rapidamente o status atual de um fluxo: quanto trabalho foi feito, o que está em andamento e quanto tempo será necessário para que determinado escopo seja concluído.

A estrutura do gráfico é simples. O eixo horizontal representa um período de tempo (semanas, sprints, etc.) e o vertical indica, de forma acumulada, o número de itens no processo (total de tarefas, total de histórias, etc.).

Cada área pintada na visualização está relacionada a uma etapa do fluxo de trabalho (backlog, em progresso, finalizado, etc) e as curvas são basicamente o número de itens acumulados em tais etapas.

![Gráfico de fluxo acumulado](https://rapha-albino.com.br/wp-content/uploads/2022/04/grafico-cfd.png)

Gráfico de fluxo acumulado de uma equipe.

Para demonstrar como é possível utilizar o CFD, descreverei a aplicação dele em um projeto. No caso a seguir, o fluxo de trabalho era composto pelas seguintes etapas:

* **Backlog:** itens que precisavam ser refinados.
* **Ready to Dev:** itens com critérios de aceite definidos e com uma definição explícita de “feito”.
* **Developing:** itens em desenvolvimento.
* **Testing:** itens sendo verificados e validados.
* **Accepted:** itens lançados em produção.

Neste projeto, o CFD foi utilizado para: (1) comunicar o progresso; (2) identificar os gargalos do fluxo; (3) gerenciar as filas. O gráfico foi acompanhado semanalmente, dada cadência de alinhamento que existia com a diretoria da empresa.

Os próximos 3 diagramas representam o projeto no início (primeiras 7 semanas), no meio (11ª semana) e no final (semana 22).

### O começo do projeto

![Gráfico de fluxo acumulado - Início](https://rapha-albino.com.br/wp-content/uploads/2022/04/global-cumulative-flow-diagram-beginning.jpeg)

No início do projeto, a equipe enfrentou uma situação em que a relação entre a chegada e a saída dos itens não era proporcional — a quantidade de itens entregues média da equipe era de 3 itens por semana e o escopo aumentava 7 itens por semana.

Este comportamento demonstra um desbalanço no fluxo, dado que o número de itens entregues difere do total de entregas, ou seja, existe mais trabalho entrando do que sendo finalizado.

Naquele instante, a equipe e a PO discutiram soluções para que a taxa de crescimento do escopo acompanhasse a cadência de entrega.

Outra informação que pode ser extraída do gráfico é que alguns itens foram criados (estágio de Backlog), mas não foram detalhados (Ready to Dev). Neste caso, a equipe refinou junto da PO um conjunto de itens e os deixou prontos para serem trabalhados.

### O meio do projeto

![Gráfico de CFD - meio](https://rapha-albino.com.br/wp-content/uploads/2022/04/global-cumulative-flow-diagram-middle.jpeg)

Ao analisar o CFD no meio do projeto, é possível observar que as etapas de desenvolvimento (Developing) e testes (Testing) não apresentavam acúmulo entre as etapas (sobrecarga). Comparado com as primeiras 6 semanas (início do projeto), a relação entre itens criados e entregues passou a ser a mesma: 3 itens por semana.

A equipe sabia que o ritmo de entrega precisava aumentar. Além disso, o projeto ainda apresentava indefinições — 15 itens não estavam preparados para serem desenvolvidos. Um dos causadores de tal situação foi a alta incerteza no design da aplicação.

### A finalização do projeto

![Gráfico de CFD - Fim](https://rapha-albino.com.br/wp-content/uploads/2022/04/global-cumulative-flow-diagram-end.png)

Uma coisa interessante percebida ao final deste projeto foi que o trabalho na etapa de teste fluiu bem. Olhando para o gráfico, é possível reconhecer que as linha azuis (etapa de Teste) desapareciam rapidamente. Isso ocorreu porque a interação dentro da equipe foi intensa. Na semana 19, a equipe e a PO alinharam que nenhum novo item seria incluído no escopo, porque o prazo de entrega estava chegando.

Outra informação que pode ser observada no gráfico acima é que a equipe não concluiu todas as demandas previstas no escopo — a etapa “Accepted” não ocupou todo o diagrama. Nesse caso, a equipe de desenvolvimento da empresa cliente assumiu os 5 itens que estavam em progresso (2 em desenvolvimento e 3 em testes).

Vale compartilhar que os itens entregues geraram uma solução de qualidade e alinhada com o que o cliente precisava, nos lembrando da relevância de priorizar e entregar aquilo que importa primeiro.

O diagrama se mostrou um excelente companheiro para discussões sobre limitação e gerenciamento da quantidade de trabalho em progresso.

## Concluindo

A visualização do fluxo através do CFD  fornece uma visão quantitativa e qualitativa de problemas potenciais no fluxo de trabalho. Encontrar soluções é uma outra história.

Para aprender mais sobre o CFD, recomendo 4 boas referências:

* O excelente artigo, [Cumulative Flow Diagram](http://brodzinski.com/2013/07/cumulative-flow-diagram.html) do Pawel Brodzinski.
* O livro do Daniel Vacanti, [Actionable Agile Metrics for Predictability](https://leanpub.com/actionableagilemetrics).
* [The Cumulative Flow Diagram in a nutshell](http://leanguru.pro/the-cumulative-flow-chart-cfd-in-a-nutshell/).
* Minha publicação em português, [Métricas Ágeis – Obtenha melhores resultados em sua equipe](https://www.casadocodigo.com.br/products/livro-metricas-ageis").

E você, como tem utilizado o CFD? Compartilhe sua opinião nos comentários abaixo!
