import { useDisptach, useSelector } from 'react-redux';
import { selectCounter } from '../../redux-modules/counter/counterSelector';
import { increment, decrement , incrementByAmount } from '../../redux-modules/counter/counterSlice';

export const Counter = () => {
 const dispatch = useDisptach(); 
 const counter = useSelector(selectCounter);


    return (
        <div>
        <h1>THE COUNT:</h1>
        <h2>{counter}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>
        </div>
    )

}




