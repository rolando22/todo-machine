import { createContext, useState } from "react";
import { useLocalStorage } from '../../hooks/useLocalStorage';

// const defaultTodos = [
//     { text: 'Cortar Cebollas', completed: true },
//     { text: 'Tomar el Curso de React', completed: false },
//     { text: 'Llorar con la Llorona', completed: false },
//     { text: 'LALALALALLA', completed: true },
//     { text: 'Aplicar estados derivados', completed: true },
// ];

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOs_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [toggleModal, setToggleModal] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

    const addTodo = (text) => {
        const newTodos = [...todos, { text, completed: false }];
        saveTodos(newTodos);
    };

    const onComplete = (text) => () => {
        const newTodos = todos.map(todo => {
                if (todo.text === text) todo.completed = !todo.completed;
                return todo;
            });
        saveTodos(newTodos);
    };

    const onDelete = (text) => () => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    };

    const handlerToggleModal = () => setToggleModal(state => !state);

    return (
        <TodoContext.Provider value={{
            completedTodos,
            todos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            onComplete,
            onDelete,
            loading,
            error,
            toggleModal,
            handlerToggleModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}
