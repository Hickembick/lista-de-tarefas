const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req,res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
}

module.exports.saveToDo = async (req,res) => {

    const { text } = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log('Adicionado com Sucesso!');
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async (req,res) => {
    const {_id , text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text},{new :true})
    .then(() => res.send("Atualizado com Sucesso!"))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req,res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deletado com Sucesso!"))
    .catch((err) => console.log(err))
}

module.exports.getToDoById = async (req, res) => {
    const { id } = req.params;
    ToDoModel.findById(id)
        .then(todo => {
            if (todo) {
                res.send(todo);
            } else {
                res.status(404).send('Tarefa não encontrada');
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao buscar a tarefa por ID');
        });
}

module.exports.searchByPartialText = async (req, res) => {
    const { partialText } = req.body;

    if (!partialText) {
        return res.status(400).send('É necessário fornecer uma parte da string para a pesquisa.');
    }

    // Use uma expressão regular para buscar por parte do texto (case-insensitive)
    const regex = new RegExp(partialText, 'i');

    ToDoModel.find({ text: regex })
        .then(todos => {
            res.send(todos);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao buscar tarefas por parte da string');
        });
};


