import { useDispatch, useSelector } from 'react-redux';
import { selectStrings } from '../../redux-modules/stringArray/stringArraySelector';
import { addString } from '../../redux-modules/stringArray/stringArraySlice';

export const StringArray = () => {
 const dispatch = useDispatch(); 
 const strings = useSelector(selectStrings);
    
 return (
        <div>
        <h1>THE STRING ARRAY:</h1>
        <button
            onClick={()=> dispatch(addString())}
        >
            Add String
        </button>
        <ul>{strings.map(strings => <li key={strings}>{strings}</li>)}</ul>
        </div>
        )

}