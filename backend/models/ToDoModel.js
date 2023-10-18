const mongoose = require('mongoose');

// Define um schema (modelo) para os documentos de tarefas

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['CONCLUÍDO', 'NÃO CONCLUÍDO'],
        default: 'NÃO CONCLUÍDO'
    }
});
// Exporta o modelo "ToDo" baseado no schema definido acima

module.exports = mongoose.model('ToDo', todoSchema);
