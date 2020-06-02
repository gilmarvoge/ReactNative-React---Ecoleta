import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    console.log("listagem");
    //response.send('Hello') strinf
    response.json([
        'Diego',
        'Cleiton',
        'Gilmar'

    ]);

});
app.listen(3333);