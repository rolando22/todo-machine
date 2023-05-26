import { useState } from 'react';
import { 
    CreateTodoButton, 
    TodoCounter, 
    TodoItem, 
    TodoList, 
    TodoSearch 
} from './components';

import './App.css';

const defaultTodos = [
    { text: 'Cortar Cebollas', completed: true },
    { text: 'Tomar el Curso de React', completed: false },
    { text: 'Llorar con la Llorona', completed: false },
    { text: 'LALALALALLA', completed: true },
    { text: 'Aplicar estados derivados', completed: true },
];

function App() {
    let localStorageTodos;

    if (!localStorage.getItem('TODOs_V1')) {
        localStorage.setItem('TODOs_V1', JSON.stringify(defaultTodos));
        localStorageTodos = [];
    } else {
        localStorageTodos = JSON.parse(localStorage.getItem('TODOs_V1'));
    }

    const [todos, setTodos] = useState(localStorageTodos);
    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

    const saveTodos = (newTodos) => {
        localStorage.setItem('TODOs_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
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

    return (
        <>
            <TodoCounter 
                completed={completedTodos} 
                total={todos.length}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map(todo => 
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={onComplete(todo.text)}
                        onDelete={onDelete(todo.text)}
                    />
                )}
            </TodoList>

            <CreateTodoButton/>
        </>
    );
}

export default App;
