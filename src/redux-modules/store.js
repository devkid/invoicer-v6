import switchModeSlice from './switchMode/switchModeSlice';
import companiesSlice from './companies/companiesSlice';
import { configureStore, applyMiddleware, StoreEnhancer, ThunkDispatch, AnyAction} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import {setupListeners} from '@reduxjs/toolkit/query';
import { dbApi } from '../api/db.ts';

export const createStore = (applyMiddleware1: StoreEnhancer<{ dispatch: ThunkDispatch<any, undefined, AnyAction> }>) => {
    const reducer = {
        switchModeSlice,
        companiesSlice,
         [dbApi.reducerPath]: dbApi.reducer,
    }
    return configureStore({
        reducer,
        // TODO is devtool = reduxDevTool? and how to type it
        // devtool: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dbApi.middleware)
    });

    setupListeners(store.dispatch)
}

const store = createStore(applyMiddleware(thunkMiddleware));

export default store;