import './Select.css';

export function Select({ children, value, onChange }) {
    return (
        <select 
            className="Select-container"
            value={value}
            onChange={onChange}
        >{children}</select>
    );
}
