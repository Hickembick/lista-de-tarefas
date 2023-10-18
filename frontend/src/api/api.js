import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('dados --->',data);
        setToDo(data)
    })
    .catch((err) => console.log(err))
}

const addToDo = (text,setText,setToDo) => {
    axios
    .post(`${baseUrl}/save`,{text})
    .then(({data}) => {
        console.log('dados --->',data);
        setText("");
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId,text,setToDo,setText,setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`,{_id:toDoId ,text})
    .then(({data}) => {
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
    
}

const deleteToDo = (toDoId,setToDo) => {
    axios
    .post(`${baseUrl}/delete`,{_id:toDoId})
    .then(({data}) => {
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
    
}

const getToDoById = (id) => {
    return axios
      .get(`${baseUrl}/search-by-id/${id}`)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  };
  
  const searchByPartialText = (text) => {
    return axios
      .get(`${baseUrl}/search-by-text/?partialText=${text}`)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  };

  const toggleStatus = (toDoId,setToDo) => {
    axios
      .put(`${baseUrl}/toggle-status`, { _id: toDoId })
      .then(({data}) => {
        getAllToDo(setToDo)
    })
    .catch((err) => {
        console.error(err);
      });
  };
  
  
  
export {getAllToDo , addToDo , updateToDo, deleteToDo , toggleStatus}