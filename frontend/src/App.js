import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo } from "./api/api";

function App() {
  const [toDo,setToDo] = useState([])
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])
  const [text,setText] = useState("");
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])
  return (
    <div className="App">
        <div className="container">
          <h1>ToDo App</h1>
            <div className="top">
                <input type="text"
                 placeholder="adicionar tarefa"
                 value={text}
                 onChange={(e) => setText(e.target.value)}
                 />
                <div  className="add" onClick={() => addToDo(text,setText,setToDo)} >
                  Adicionar
                </div>
            </div>
            <div className="list">
            {toDo.map((item)=> <ToDo key={item._id} text={item.text}/>)}
            </div>
        </div>
    </div>
  );
}

export default App;
