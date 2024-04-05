## Ao desenvolver api é usado um protocolo de comunicação back-end e front-end.
alguns deles são:
SOAP() ineficiente e antigo
REST (api que retorna/transiciona dados usando json cada rota cria deleta etc.)
RESTful (nem todas que se denominam são)

## Coisas que são importantes e todo mundo que quer desenvolver uma aplicação back-end deve entender
Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...

Corpo da Requisição (Request body) // geralmente POST ou PUT

Parametros de busca (Search params/Querry) //parametros na url para filtrar dados geralmente usados em rotas GET 
ex: `https://localhost:3333/users?name=Diego`(*?name=Diego* é o parametro)

Parametros de rota (route params) // identificação de recursos geralmente usado em GET, PUT, DELETE, PATCH
ex: `Delete https://localhost:3333/users/5`

Cabeçalhos (Headers) // Contexto das requisições 

Semânticas = significado

## formas de conectar com banco de dados 
geralmente tem: Driver nativo (baixo nivel) otimo pra quem tem conhecimento em sql/ Query Builders(mais famoso é o knex) / ORMs -> Object Relational Mapping

## Object Relational Mapping
(Hibernate / Doctrine / ActiveRecord)
Sequelize(api ficou um pouco atrás)
prisma
drizzle(muito embrionário)

orms abstrai a conexão com o banco de dados permitindo alternar com outro bancos de dados sem mudar o código

## Variaveis Ambiente (neste caso definido pelo arquivo.env)
são informações que são diferentes de acordo com o ambiente onde esta sendo executada 
ex: `url de acesso ao banco de dados na minha maquina é x e quando na produção é y`
ambientes(environment(env-ironment = .env)): **teste, produção, desenvolvimente, ambiente físico etc**
são variaveis de configarações do projeto 

## códigos html/status code
200 ok
201 Muito ok registro criado com sucesso

2xx => sucesso
3xx => redirecionamento
4xx => erro de client
5xx => erro de client
