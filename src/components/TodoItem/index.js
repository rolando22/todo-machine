import { useContext } from 'react'
import { CompleteIcon, DeleteIcon } from '../';
import { TodoContext } from '../../contexts/TodoContext';

import './TodoItem.css';

export function TodoItem ({ text, completed }) {
    const { onComplete, onDelete } = useContext(TodoContext);

    return (
        <li className="TodoItem">
            <CompleteIcon 
                completed={completed} 
                onComplete={onComplete(text)}
            />
            <p className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""}`}>
                {text}
            </p>
            <DeleteIcon 
                onDelete={onDelete(text)}
            />
        </li>
    );
}
