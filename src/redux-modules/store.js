import { configureStore } from '@reduxjs/toolkit';
import { counterSlice }  from './counter/counterSlice';
import { stringArraySlice } from './stringArray/stringArraySlice';
import { switchModeSlice } from './app/appSlice';
import companiesSlice from './companies/companiesSlice';

export const createStore = () => {
    const reducer = {
        companiesSlice,
        counterSlice,
        stringArraySlice,
        switchModeSlice
    }
    return configureStore ({
        reducer,
        devtoolo:true
    })
};

const store = createStore();

export default store;