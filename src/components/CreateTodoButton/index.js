import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

import './CreateTodoButton.css';

export function CreateTodoButton() {
    const { handlerToggleModal } = useContext(TodoContext);

    return (
        <button 
            className="CreateTodoButton"
            onClick={handlerToggleModal}
        >
            +
        </button>
    );
}
