import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

const defaultTodos = [
    { text: 'Cortar Cebollas', completed: true },
    { text: 'Tomar el Curso de React', completed: false },
    { text: 'Llorar con la Llorona', completed: false },
    { text: 'LALALALALLA', completed: true },
];

function App() {
    return (
        <>
            <TodoCounter completed={16} total={25}/>
            <TodoSearch />

            <TodoList>
                {defaultTodos.map(todo => 
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                    />
                )}
            </TodoList>

            <CreateTodoButton/>
        </>
    );
}

export default App;
