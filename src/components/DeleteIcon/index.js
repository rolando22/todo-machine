import { TodoIcon } from '..';

export function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon 
            type='delete'
            color='grey'
            onClick={onDelete}
        />
    );
}
