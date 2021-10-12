# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Automóveis são bens muito importantes e presentes na nossa sociedade, a compra ou um aluguel de um veículo é algo muito comum, entretanto a busca pelo veículo ideal pode se tornar uma dor de cabeça, já que existem milhares de anunciantes, em sites diferentes espalhados pela internet. O objetivo do FindCar é facilitar esse proceso para as pessoas, funcionando como um buscador de veículos, recebendo as informações do que o usuário deseja e retornando os melhores resultados dentre os principais sites de anúncio.

## Personas
1- Daniele é uma jovem de 23 anos, trabalha com marketing digital e está em busca de adquirir o seu primeiro automóvel, não conhece muito do mercado de carros, mas já tem em mente o veículo que deseja, precisa de uma ferramenta que a auxilie em encontrar os melhores veículos desse modelo.

2-Erlan Lucio, estudante de Analise e Desenvolvimento de Sistemas, trabalha atualmente como analista de desenvolvimento na Take Bleep e precisa realizar uma viagem para Arraial do Cabo, no Rio de Janeiro.  Erlan é um analista sistemático e metódico, por atuar com tecnologia da informação ele tem preferência que o fechamento do negócio com o aluguel de carros seja rápido e prático. Erlan deseja alugar um carro na cidade para ir aos lugares e conhecer a cidade, pois estará na cidade à negócio.

3-Ramon é um senhor de 60 anos aposentado. Ele pretende trocar seu carro já bastante velho por um modelo novo. Para não se desgastar indo em várias agências descobriu que pode fazer a pesquisa de um modelo pela internet. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Eu Daniele          | quero um sistema que me permita escolher o modelo do veículo   | porque tenho interesse em comprar apenas desse modelo                 |                    
|Eu Daniele          | preciso que os anúncios estejam em uma lista ou tabela         | para que eu consiga comparar as informações básicas entre os veículos |
|Eu Ramon  | Quero que seja simples a utilização e em poucos cliques conseguir um resultado | Para que eu com pouco conhecimento em informática consiga fazer as buscas |
|Eu Ramon  | Preciso que tenha a opção de buscar os veículos por km rodado         | para conseguir comprar um veículo que seja relativamente novo |
|Eu Erlan  | Preciso que encontrar de forma prática um modelo/marca de veículo     | para ser especifico no que diz respeito a marca/modelo de minha preferencia |
|Eu Erlan  | Preciso ver uma lista com as agencias disponiveis para que eu possa escolher | para ver se existe alguma agencia no qual ja sou cliente 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Possuir ferramenta de definição de localização para possibilitar a efetivação de negócios em uma determinada área que o usuário determine. | ALTA | 
|RF-002| O sistema deve permitir a filtragem dos anúncios pelas características dos carros. | ALTA |
|RF-003| Possuir redirecionamento para o site original do anúncio. | ALTA |
|RF-004| O sistema precisa permitir buscar apenas anúncios de venda ou de aluguel de veículo. | ALTA |
|RF-005| O usuário pode pesquisar todo ou um subconjunto de informações específicas. | MEDIA|
|RF-006| Possuir mecanismo de resetar os filtros escolhidos. | BAIXO |
|RF-007| O sistema precisa listar as agências ou sites em que a pesquisa é feita. | BAIXO |
|RF-008| Possuir motor web crawler para envio das informações dos carros. | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo. | ALTA | 
|RNF-002| O sistema deve possuir boa usabilidade. |  ALTA | 
|RNF-003| O sistema deve retornar no máximo 100 anúncios por página. |  MEDIA | 


## Restrições

Como em todo projeto que há suas limitações e objetivos a cumprir, é de extrema importância e notoriedade que listando as restrições existentes temos objetivos mais claros em relação até onde podemos ir e a mensuridade de esforços necessários, com base nisso relacionamos abaixo os pontos pelos quais o projeto se encontra delimitado. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Quanto ao prazo para entrega do projeto final, o que deve acontecer até o término do semestre corrente |
|02| Limitação quanto a área de atuação. (Projeto voltado para a área de vendas e negociações de veículos)|
|03| Restrição quanto a quantidade de integrantes do projeto. (5 colaboradores)|
|04| Delimitação quanto a custos monetários, onde uma vez que não será gasto nenhum tipo de valor adicional no projeto.|
|05| Não será desenvolvido aplicação mobile.|


