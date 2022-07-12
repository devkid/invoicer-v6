import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as reduxFormReducer } from 'redux-form';
import { counterReducer } from './counter';
import { stringArrayReducer } from './stringArray';
import { companiesReducer } from './Companies';

const reducer = combineReducers({
    form: reduxFormReducer,
})

export default configureStore({
    reducer:{
        counter:  counterReducer,
        stringArray: stringArrayReducer,
        companies: companiesReducer
    },
});


