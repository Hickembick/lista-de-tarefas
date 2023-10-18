import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'; 
const ToDo = ({text,updateMode,deleteToDo,completeToDo }) => {
    return (
        <div className='todo'>
            <div className='text'>{text}</div>
            <div className='icons'>
            <BsCheckCircle
                    className="icon"
                    style={{ color: 'green', cursor: 'pointer' }}
                    onClick={completeToDo}
                />
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deleteToDo} />
            </div>
        </div>
    )
}


export default ToDo;