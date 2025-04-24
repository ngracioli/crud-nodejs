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

const Usuario = require("./models/Usuario");

app.get("/usuarios", async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});

app.post("/usuarios", async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        res.status(500).json({
            erro: "Erro ao criar usuário",
            detalhes: err.message,
        });
    }
});

app.get("/usuarios/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json(usuario);
    } catch (err) {
        res.status(500).json({
            erro: "Erro ao buscar usuário",
            detalhes: err.message,
        });
    }
});

app.put("/usuarios/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json(usuario);
    } catch (err) {
        res.status(500).json({
            erro: "Erro ao atualizar usuário",
            detalhes: err.message,
        });
    }
});

app.delete("/usuarios/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json({ mensagem: "Usuário deletado com sucesso" });
    } catch (err) {
        res.status(500).json({
            erro: "Erro ao deletar usuário",
            detalhes: err.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
