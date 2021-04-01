const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {

    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        console.log(data);

        return res.json(data);

    } catch(error) {
        console.error(error);
    }
});

app.listen('4567', () => {
    console.log("Servidor funcionando!!!");
});

//npx live-server