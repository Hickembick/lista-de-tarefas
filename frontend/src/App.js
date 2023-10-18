import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
        <div className="container">
          <h1>ToDo App</h1>
            <div className="top">
                <input type="text" placeholder="adicionar tarefa"/>
                <div  className="add">
                  Adicionar
                </div>
            </div>
            <div className="list">
              <ToDo text="Jéssica"/>
            </div>
        </div>
    </div>
  );
}

export default App;
