import React, {FC, useRef} from 'react';
import '../App.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: FC<Props> = ({todo, setTodo, handleAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className='input'
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur();
        }}
        >
            <input
                type='input'
                value={todo}
                ref={inputRef}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a todo'
                className='input__box'
            />

            <button
                className='input__submit'
                type='submit'
            >
                Go
            </button>
        </form>
    )

}
export default InputField;