import { InputInterface } from "./Input.interface.ts";
import s from './Input.module.scss'; // Import CSS Modules styles

export const Input = ({ type, value, setValue, placeholder }: InputInterface) => {
  return (
      <input
          className={`${s.input} ${type ? s[type] : ''}`} // Conditionally apply classes using CSS Modules
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          disabled={type == 'disabled'}
      />
  );
};
