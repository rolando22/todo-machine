import { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext';

import './TodoSearch.css';

export function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

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
