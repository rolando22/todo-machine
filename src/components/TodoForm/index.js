import { useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

import './TodoForm.css';

export function TodoForm() {
    const { addTodo, handlerToggleModal } = useContext(TodoContext);
    const [textTodo, setTextTodo] = useState('');
    const [isTextTodoInvalid, setIsTextTodoInvalid] = useState(false);

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        setIsTextTodoInvalid(false);
        if (!textTodo) return setIsTextTodoInvalid(true);
        addTodo(textTodo.trim());
        handlerToggleModal();
    };

    const handlerOnChange = (event) => {
        setTextTodo(event.target.value);
    };

    return (
        <form 
            className="TodoForm-container"
            onSubmit={handlerOnSubmit}
        >
            <label 
                htmlFor="textTodo"
                className="TodoForm-label"
            >Agregar nuevo TODO</label>
            <textarea 
                className="TodoForm-text"
                name="textTodo" 
                id="textTodo" 
                placeholder="Escribe aquí tu nuevo TODO"
                value={textTodo}
                onChange={handlerOnChange}
            />
            <p 
                className={`${isTextTodoInvalid ? "TodoForm-invalid" : "TodoForm-valid"}`}
            >El TODO no puede ser un texto vacío</p>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={handlerToggleModal}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}
