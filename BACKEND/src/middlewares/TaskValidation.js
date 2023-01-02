// Validacao dos campos do Model com verbos HTTP e uma MSG 
// Json mais amigavel

const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) =>{

    const { macaddress, type, title, description, when } = req.body;

    if(!macaddress)
    return res.status(400).json({ error: "macaddress obrigatorio"})
    else if(!type)
    return res.status(400).json({ error: "Tipo obrigatorio"})
    else if(!title)
    return res.status(400).json({ error: "Titulo obrigatorio"})
    else if(!description)
    return res.status(400).json({ error: "Descricao obrigatorio"})
    else if(!when)
    return res.status(400).json({ error: "Data e Hora sao obrigatorio"})
    else if(isPast(new Date(when)))
    return res.status(400).json({ error: "Escolha uma data e hora futura"})
    else{
        let exists;
        exists = await TaskModel.findOne({'when':{'$eq': new Date(when)},'macaddress': {'$in': macaddress}})

        if (exists){
            return res.status(400).json({ error: "Ja existe uma tarefa nesse dia e horario"})
         }
        next();
    }
}

module.exports = TaskValidation;