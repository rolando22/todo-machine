import { useContext } from 'react';
import { 
    CreateTodoButton, 
    EmptyTodos, 
    Modal, 
    TodoCounter, 
    TodoForm, 
    TodoItem, 
    TodoList, 
    TodoSearch, 
    TodosError, 
    TodosLoading,
} from '../';
import { TodoContext } from '../../contexts/TodoContext';

import './App.css';

export function AppUI() {
    const {
        todos,
        searchedTodos,
        loading,
        error,
        toggleModal,
    } = useContext(TodoContext);

    return (
        <main className="App-container">
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && [1, 2, 3, 4, 5].map((_, index) => 
                    <TodosLoading 
                        key={index}
                    />
                )}
                {error && <TodosError />}
                {!loading && todos.length === 0 && <EmptyTodos />}
                {searchedTodos.map(todo => 
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                    />
                )}
            </TodoList>

            <CreateTodoButton/>
            
            {toggleModal && 
                <Modal>
                    <TodoForm />
                </Modal>
            }
        </main>
    );
}
