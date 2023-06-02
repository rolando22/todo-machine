import { TodoIcon } from '../';

export function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon 
            type='delete'
            color='#5e6b78'
            onClick={onDelete}
        />
    );
}
