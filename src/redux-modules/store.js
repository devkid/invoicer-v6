import { configureStore } from '@reduxjs/toolkit';
import switchModeSlice from './switchMode/switchModeSlice';
import companiesSlice from './companies/companiesSlice';

export const createStore = () => {
    const reducer = {
        companiesSlice,
        switchModeSlice
    }
    return configureStore ({
        reducer,
        devtoolo:true
    })
};

const store = createStore();

export default store;