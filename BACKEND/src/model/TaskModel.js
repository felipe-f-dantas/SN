//Import das credencias do Atlas
const mongoose = require('../config/database');
const Schema = mongoose.Schema;
//Definicao do Modelo de Dados da Tarefa 
const TaskSchema = new Schema({
        macaddress: {type: String, required: true},
        type:{type: Number, required: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        when: {type: Date, required: true},
        done: {type: Boolean, default: false},
        created:{type: Date, default: Date.now()}
});

module.exports = mongoose.model('Task',TaskSchema);
