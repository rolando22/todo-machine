import { CompleteIcon, DeleteIcon } from '../';

import './TodoItem.css';

export function TodoItem ({ text, completed, onComplete, onDelete }) {
    return (
        <li className="TodoItem">
            {/* <span 
                className={`Icon Icon-check ${completed ? "Icon-check--active" : ""}`}
                onClick={onComplete}
            >
                V
            </span> */}
            <CompleteIcon 
                completed={completed} 
                onComplete={onComplete}
            />
            <p className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""}`}>
                {text}
            </p>
            <DeleteIcon 
                onDelete={onDelete}
            />
            {/* <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span> */}
        </li>
    );
}
