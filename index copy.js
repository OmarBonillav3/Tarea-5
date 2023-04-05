const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const _URL = 'http://www.raydelto.org/agenda.php';

const app = express();
app.use(bodyParser.json());

app.get('/contactos', async (req, res) => {
    try {
        const response = await axios.get(_URL);
        res.send(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el contacto');
    }
});

app.post('/contactos', async (req, res) => {
    const contacto = req.body;
    try {
        const response = await axios.post(_URL, contacto);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar');
    }
});

const PORT = process.env.PORT || 8080;
app.listen (PORT, () => console.log(`Servidor se inició: ${PORT}`));
                    ///OmarBonilla 2022-0328///