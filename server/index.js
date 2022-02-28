const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

SERVER_PORT = 4000;

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`));


app.get('/api/users', (req, res) => {
    let users = ['Nate', 'Jeddy', 'Alec', 'Ivan', 'Laura']
    res.status(200).send(users);
})

app.get("/weather/:temperature", (req, res) => {
    const {temperature} = req.params;
    const returnPhrase = `<h1>The temperature today is: ${temperature}.</h1>`

    res.status(200).send(returnPhrase)
});
