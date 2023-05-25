import './TodoSearch.css';

export function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <input
            className="TodoSearch"
            type="text" 
            placeholder="Buscar TODO..." 
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
        />
    );
}
