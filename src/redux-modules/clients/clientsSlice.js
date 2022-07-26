import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clients: [
        { id: 1, clientName: 'Tesla' },
        { id: 2, clientName: 'Merceds' },
        { id: 3, clientName: 'Audi' },
        { id: 4, clientName: 'Nissan' }
    ]
};

const clientsSlice = createSlice({
    name: 'clientsSlice',
    initialState,
    reducers: {
        addClient: (state, { payload }) => {
            const clientsArray = state.clients;
            clientsArray.push({ id: clientsArray[clientsArray.length-1].id + 1, clientName: payload });
            // eslint-disable-next-line no-param-reassign
            state.clients = clientsArray;
        },
        deleteClient: (state, { payload }) => {
            const filteredArray = state.clients.filter(clients => clients.id !== payload.id);
            // eslint-disable-next-line no-param-reassign
            state.clients = filteredArray;
        }
    }
});

export default clientsSlice.reducer;

export const {
    addCompany,
    deleteCompany
} = clientsSlice.actions;