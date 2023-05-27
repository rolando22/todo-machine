import { useState } from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const defaultTodos = [
    { text: 'Cortar Cebollas', completed: true },
    { text: 'Tomar el Curso de React', completed: false },
    { text: 'Llorar con la Llorona', completed: false },
    { text: 'LALALALALLA', completed: true },
    { text: 'Aplicar estados derivados', completed: true },
];

function App() {
    const [todos, saveTodos] = useLocalStorage('TODOs_V1', defaultTodos);
    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

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

    return (
        <AppUI 
            completedTodos={completedTodos}
            todos={todos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            onComplete={onComplete}
            onDelete={onDelete}
        />
    );
}

export default App;
