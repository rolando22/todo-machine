import { createContext, useState } from "react";
import { useLocalStorage } from '../../hooks/useLocalStorage';

const defaultTodosCategories = [
    { name: 'Actividad libre' },
    { name: 'Universidad' },
    { name: 'Trabajo' },
    { name: 'Trámite' },
];

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error,
    } = useLocalStorage('TODOs_V1', []);
    const [categories, setCategories] = useState(defaultTodosCategories.sort());
    const [searchValue, setSearchValue] = useState({ text: '', category: '' });
    const [toggleModal, setToggleModal] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.text.toLocaleLowerCase();
        return todoText.includes(searchText) && todo.category.includes(searchValue.category);
    });

    const addTodo = ({ text, category }) => {
        const newTodos = [...todos, { text, category, completed: false }];
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
            categories,
            setCategories,
        }}>
            {children}
        </TodoContext.Provider>
    );
}
