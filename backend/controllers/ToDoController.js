const db = require('../models/ToDoModel');

// Endpoint para obter todas as tarefas
module.exports.getToDo = async (req, res) => {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar as tarefas.');
      return;
    }
    res.send(rows);
  });
}

// Endpoint para salvar uma nova tarefa
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  db.run('INSERT INTO tasks (text) VALUES (?)', [text], function (err) {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao salvar a nova tarefa.');
      return;
    }
    console.log('Adicionado com Sucesso!');
    console.log({ text, id: this.lastID });
    res.send({ text, id: this.lastID });
  });
}


module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  db.run('UPDATE tasks SET text = ? WHERE id = ?', [text, _id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar a tarefa.');
      return;
    }
    res.send('Atualizado com Sucesso!');
  });
};


// Endpoint para excluir uma tarefa
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  db.run('DELETE FROM tasks WHERE id = ?', [_id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao excluir a tarefa.');
      return;
    }
    res.send('Deletado com Sucesso!');
  });
}

// Endpoint para obter uma tarefa pelo ID
module.exports.getToDoById = async (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM tasks WHERE id = ?', [id], (err, todo) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar a tarefa por ID.');
      return;
    }
    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send('Tarefa não encontrada');
    }
  });
}

// Endpoint para buscar tarefas com base em uma parte do texto
module.exports.searchByPartialText = async (req, res) => {
  const { partialText } = req.body;

  if (!partialText) {
    return res.status(400).send('É necessário fornecer uma parte da string para a pesquisa.');
  }

  const regex = new RegExp(partialText, 'i');

  db.all('SELECT * FROM tasks WHERE text LIKE ?', [`%${partialText}%`], (err, todos) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar tarefas por parte da string.');
      return;
    }
    res.send(todos);
  });
}

// Endpoint para alternar o status de uma tarefa entre "NÃO CONCLUÍDO" e "CONCLUÍDO"
module.exports.toggleStatus = async (req, res) => {
  const { _id } = req.body;
    
  db.get('SELECT * FROM tasks WHERE id = ?', [_id], (err, todo) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar a tarefa por ID.');
      return;
    }

    if (!todo) {
      return res.status(404).send('Tarefa não encontrada');
    }

    const newStatus = todo.status === 'NÃO CONCLUÍDO' ? 'CONCLUÍDO' : 'NÃO CONCLUÍDO';
    db.run('UPDATE tasks SET status = ? WHERE id = ?', [newStatus, _id], (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar a tarefa atualizada');
        return;
      }
      res.send({ ...todo, status: newStatus });
    });
  });
};
