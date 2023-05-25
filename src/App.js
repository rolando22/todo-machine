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
    const [todos, setTodos] = useState(defaultTodos);
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
        setTodos(newTodos);
    };

    const onDelete = (text) => () => {
        const newTodos = todos.filter(todo => todo.text !== text);
        setTodos(newTodos);
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
