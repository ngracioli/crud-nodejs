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

UsuarioSchema.set("toJSON", {
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return {
            id: ret.id,
            ...ret,
        };
    },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
