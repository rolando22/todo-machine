import { useContext } from 'react';
import { 
    CreateTodoButton, 
    EmptyTodos, 
    TodoCounter, 
    TodoItem, 
    TodoList, 
    TodoSearch, 
    TodosError, 
    TodosLoading,
} from '../';
import { TodoContext } from '../../contexts/TodoContext';

export function AppUI() {
    const {
        todos,
        searchedTodos,
        loading,
        error,
    } = useContext(TodoContext);

    return (
        <>
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
        </>
    );
}
