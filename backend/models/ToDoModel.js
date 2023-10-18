const mongoose = require('mongoose');

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

module.exports = mongoose.model('ToDo', todoSchema);
