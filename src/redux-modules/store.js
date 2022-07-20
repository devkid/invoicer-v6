import { configureStore } from '@reduxjs/toolkit';
import { counterSlice }  from './counter/counterSlice';
import { stringArraySlice } from './stringArray/stringArraySlice';
import companiesSlice from './companies/companiesSlice';

export const createStore = () => {
    const reducer = {
        companiesSlice,
        counterSlice,
        stringArraySlice
    }
    return configureStore ({
        reducer,
        devtoolo:true
    })
};

const store = createStore();

export default store;