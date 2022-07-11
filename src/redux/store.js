import { configureStore } from '@reduxjs/toolkit';
import {counterReducer} from './counter';
import {stringArrayReducer} from './stringArray';

export default configureStore({
    reducer:{
        counter:  counterReducer,
        stringArray: stringArrayReducer,
    }
});