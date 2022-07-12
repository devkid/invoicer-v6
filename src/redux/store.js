import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { stringArrayReducer } from './stringArray';
import { companiesReducer } from './Companies';

export default configureStore({
    reducer:{
        counter:  counterReducer,
        stringArray: stringArrayReducer,
        companies: companiesReducer
    },
});