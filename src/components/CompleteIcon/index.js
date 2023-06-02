import { TodoIcon } from '..';

export function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
            type='check'
            color={`${completed ? '#47c2be' : '#5e6b78'}`}
            onClick={onComplete}
        />
    );
}
