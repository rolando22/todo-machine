import { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext';

import './TodoCounter.css';

export function TodoCounter() {
    const { completedTodos, todos } = useContext(TodoContext);

    return (
        <h1 className="TodoCounter">
            Has completado <span>{completedTodos}</span> de <span>{todos.length}</span> TODOs
        </h1>
    );
}
