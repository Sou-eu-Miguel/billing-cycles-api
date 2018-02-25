<p align="center">
  <img src="https://images.endeavor.org.br/uploads/2015/04/ciclo-de-caixa-pagamento-a-prazo.jpg" width="600" height="300"/>
</p>

# Billing-Cycle
API de registro de créditos e débitos

## Estrutura do diretório
```sh
.
├── api
│   ├── billingCycle
│       ├── billingCycle.js
│       └── billingCycleService.js
│    
│   └── summary
│       └── summaryService.js
│
├── config
│   ├── database.js
│   ├── routes.js
│   └── server.js
│
├── package.json
└── loader.js
```


## Tecnologias
- ES6
- Node
- Express
- Mongo

### BillingCycle
|      METODO      |     ENDPOINT               |        FUNÇÃO                                    
|------------------|----------------------------|-----------------------
| GET              | /api/billingcycles         | Listar todos os ciclos (débitos e créditos) cadastrados
| POST             | /api/billingcycles         | Cadastrar um novo ciclo contendo déditos e/ou crédotos no sistema
| PUT              | /api/billingcycles/id      | Atualiza um ciclo baseado no id
| DELETE           | /api/billingcycles/id      | Remove um ciclo baseado no id
| GET              | /api/summary               | Lista o somatório total de débitos e créditos


## Rodando localmente

Você primeiramente deve clonar o projeto
```sh
$ git clone https://github.com/I-am-Miguel/billing-cycles-api.git
```

Adicionar as dependências do projeto
```sh
$ cd billing-cycles-api
$ npm install
```

Iniciar servidor
```sh
$ npm run production
```

Parar o servidor
```sh
$ node_modules/pm2/bin/pm2 stop <id>
```
