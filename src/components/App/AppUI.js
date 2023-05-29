import { 
    CreateTodoButton, 
    TodoCounter, 
    TodoItem, 
    TodoList, 
    TodoSearch 
} from '../';

export function AppUI({ 
    completedTodos,
    todos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onComplete,
    onDelete,
    loading, 
    error,
 }) {
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
                {loading && <p>Cargando...</p>}
                {error && <p>Hubo un error!!!</p>}
                {!loading && searchedTodos === 0 && <p>Crea tu primer TODO!</p>}
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
