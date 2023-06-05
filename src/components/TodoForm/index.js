import { useContext, useState } from 'react';
import { Select } from '../';
import { TodoContext } from '../../contexts/TodoContext';

import './TodoForm.css';

export function TodoForm() {
    const { addTodo, handlerToggleModal, categories } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState({ text: '', category: categories[0].name });
    const [isTextTodoInvalid, setIsTextTodoInvalid] = useState(false);

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        setIsTextTodoInvalid(false);
        if (!newTodo.text) return setIsTextTodoInvalid(true);
        addTodo({ ...newTodo, text: newTodo.text.trim() });
        handlerToggleModal();
    };

    const handlerOnChangeInput = (event) => setNewTodo({ ...newTodo, text: event.target.value });
    const handlerOnChangeSelect = (event) => setNewTodo({ ...newTodo, category: event.target.value });

    return (
        <form 
            className="TodoForm-container"
            onSubmit={handlerOnSubmit}
        >
            <label 
                htmlFor="textTodo"
                className="TodoForm-label"
            >Agregar nuevo TODO</label>
            <div className="TodoForm-categories">
                <Select 
                    value={newTodo.category}
                    onChange={handlerOnChangeSelect}
                >
                    {categories.map(category => 
                        <option 
                            key={category.name}
                            value={category.name}
                        >{category.name}</option>
                    )};
                </Select>
            </div>
            <textarea 
                className="TodoForm-text"
                name="textTodo" 
                id="textTodo" 
                placeholder="Escribe aquí tu nuevo TODO"
                value={newTodo.text}
                onChange={handlerOnChangeInput}
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
