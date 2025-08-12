const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log("Servidor backend corriendo en http://localhost:${PORT}");
});