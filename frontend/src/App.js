import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
  toggleStatus,
} from "./api/api";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [IsUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="adicionar tarefa"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              IsUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {IsUpdating ? "Atualizar" : "Adicionar"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
              toggleStatus={() => toggleStatus(item._id, setToDo)}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
