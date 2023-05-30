import { AppUI } from './AppUI';
import { TodoProvider } from '../../contexts/TodoContext';

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
