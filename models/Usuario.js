const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    idade: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
