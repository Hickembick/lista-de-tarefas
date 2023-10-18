const ToDoModel = require('../models/ToDoModel');

// Endpoint para obter todas as tarefas
module.exports.getToDo = async (req,res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
}
// Endpoint para salvar uma nova tarefa
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
// Endpoint para atualizar uma tarefa existente
module.exports.updateToDo = async (req,res) => {
    const {_id , text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text},{new :true})
    .then(() => res.send("Atualizado com Sucesso!"))
    .catch((err) => console.log(err))
}

// Endpoint para excluir uma tarefa
module.exports.deleteToDo = async (req,res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deletado com Sucesso!"))
    .catch((err) => console.log(err))
}

// Endpoint para obter uma tarefa pelo ID

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

// Endpoint para buscar tarefas com base em uma parte do texto

module.exports.searchByPartialText = async (req, res) => {
    const { partialText } = req.body;

    if (!partialText) {
        return res.status(400).send('É necessário fornecer uma parte da string para a pesquisa.');
    }

    
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
// Endpoint para alternar o status de uma tarefa entre "NÃO CONCLUÍDO" e "CONCLUÍDO"

module.exports.toggleStatus = async (req, res) => {
    const { _id } = req.body; 

    ToDoModel.findById(_id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send('Tarefa não encontrada');
            }

            todo.status = todo.status === 'NÃO CONCLUÍDO' ? 'CONCLUÍDO' : 'NÃO CONCLUÍDO'; 
            todo.save()
                .then(updatedTodo => {
                    res.send(updatedTodo);
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send('Erro ao salvar a tarefa atualizada');
                });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao buscar a tarefa por ID');
        });
};

