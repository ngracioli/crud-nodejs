require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Erro ao conectar:", err));

app.get("/", (req, res) => {
    res.send("API funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
