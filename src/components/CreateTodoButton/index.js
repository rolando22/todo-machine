import './CreateTodoButton.css';

export function CreateTodoButton() {
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => console.log('Le diste click')}
        >
            +
        </button>
    );
}