npm i express
npm i @types/express -D
npm i ts-node -D // pra funcionar o npx ts-node
npx tsc --init
json view -- identar json chrome
npm ts-node-dev -D -- watch refresh saves 
npx ts-node-dev src/server.ts  //iniciar server com watch
-- addicionar dev no script package 
rodar com npm run dev
parou no 1.03
//https://insomnia.rest/ para post
//sql knex.js   quey builder, em javascript
npm install sqlite3 

//tabelas
 points(pontos de coleta)
    item
    name
    whatsapp
    latitue
    longitude
    city
    uf
 itens (itens para coleta)
    image
    title
 point_itens {relacionamento itens que um ponto coleta}
    point_id
    item_id
 relacionamento (N-N) (Pivot)

 rodar comandos criar tabela
   npx knex migrate:latest --knexfile knexfile.ts migrate:latest
   add no package.json:"knex:migrate":"knex  --knexfile knexfile.ts migrate:latest"
   npm run knex:migrate

para visualizar tabela, instalar complemento sqllite no vscode, e abrir pelo command pallet

ao fazer cadastro, popular dados no banco com dados padrões
   --seedfiles do knex
   "knex:seed":"knex  --knexfile knexfile.ts seed:run",

   knex.transaction() esperar uma query terminar para rodar outra

   index, - listar
   show -- listar 1 item,
   update
   delete

   melhorar estrutura/organização
   //service pattern
   // repository pattern-(data-mapper)

   1:49 olhando oportn d