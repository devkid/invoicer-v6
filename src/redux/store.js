<<<<<<< Updated upstream
=======
import { configureStore } from '@reduxjs/toolkit';
<<<<<<< Updated upstream
import {counterReducer} from './counter';
import {stringArrayReducer} from './stringArray';

export default configureStore({
    reducer:{
        counter:  counterReducer,
        stringArray: stringArrayReducer,
    }
=======
import companiesSlice from './Companies';

export default configureStore( {
  reducer:{
      name: companiesSlice,
  },
>>>>>>> Stashed changes
});
>>>>>>> Stashed changes
