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
                {loading && [1, 2, 3, 4, 5].map((_, index) => 
                    <TodosLoading 
                        key={index}
                    />
                )}
                {error && <TodosError />}
                {!loading && searchedTodos === 0 && <EmptyTodos />}
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
