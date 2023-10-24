import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
  toggleStatus,
} from "./api/api";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [IsUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [searchText, setSearchText] = useState("");

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
       <Header /> {/* Renderizar o componente Header */}
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="adicionar tarefa"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pesquisar por nome"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
          {toDo
            .filter((item) => item.text.includes(searchText))
            .map((item) => (
              <ToDo
                key={item.id}
                text={item.text}
                updateMode={() => updateMode(item.id, item.text)}
                deleteToDo={() => deleteToDo(item.id, setToDo)}
                toggleStatus={() => toggleStatus(item.id, setToDo)}
                status={item.status}
              />
            ))}
        </div>
    </div>
    <Footer></Footer>
      </div>
  );
}

export default App;
