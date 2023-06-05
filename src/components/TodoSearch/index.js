import { useContext } from 'react';
import { Select } from '../';
import { TodoContext } from '../../contexts/TodoContext';

import './TodoSearch.css';

export function TodoSearch() {
    const { searchValue, setSearchValue, categories } = useContext(TodoContext);

    const handlerOnChangeInput = (event) => setSearchValue({ ...searchValue, text: event.target.value});
    const handlerOnChangeSelect = (event) => setSearchValue({ ...searchValue, category: event.target.value});

    return (
        <div className="TodoSearch-container">
            <input
                className="TodoSearch"
                type="text" 
                placeholder="Buscar TODO..." 
                value={searchValue.text}
                onChange={handlerOnChangeInput}
            />
            <div className="TodoSearch-categories">
                <Select
                    value={searchValue.category}
                    onChange={handlerOnChangeSelect}
                >
                    <option value="">Todos</option>
                    {categories.map(category => 
                        <option 
                            key={category.name}
                            value={category.name}
                        >{category.name}</option>
                    )};
                </Select>
            </div>
        </div>
    );
}
