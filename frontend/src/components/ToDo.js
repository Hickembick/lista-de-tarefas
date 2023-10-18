import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'; 
const ToDo = ({text,updateMode,deleteToDo,toggleStatus ,status}) => {  
    return (
        <div className='todo' style={{ backgroundColor: status === 'CONCLUÍDO' ? 'green' : 'black' }}>
            <div className='text'>{text}</div>
            <div className='icons'>
            <BsCheckCircle
                    className="icon"
                    style={{ color: 'white ', cursor: 'pointer' }}
                    onClick={toggleStatus}
                />
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deleteToDo} />
            </div>
        </div>
    )
}


export default ToDo;