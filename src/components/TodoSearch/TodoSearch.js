import './TodoSearch.css';

export function TodoSearch() {
    return (
        <input
            className="TodoSearch"
            type="text" 
            placeholder="Buscar TODO..." 
            onChange={(event) => console.log(event.target.value)}
        />
    );
}
