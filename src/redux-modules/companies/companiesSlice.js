import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companies: [
        { id: 1, companyName: 'Tesla' },
        { id: 2, companyName: 'Merceds' },
        { id: 3, companyName: 'Audi' },
        { id: 4, companyName: 'Nissan' }
    ]
};

const companiesSlice = createSlice({
    name: 'companiesSlice',
    initialState,
    reducers: {
        addCompany: (state, { payload }) => {
            const companiesArray = state.companies;
            companiesArray.push({ id: companiesArray[companiesArray.length-1].id + 1, companyName: payload });
            // eslint-disable-next-line no-param-reassign
            state.companies = companiesArray;
        },
        deleteCompany: (state, { payload }) => {
            const filteredArray = state.companies.filter(company => company.id !== payload.id);
            // eslint-disable-next-line no-param-reassign
            state.companies = filteredArray;
        }
    }
});

export default companiesSlice.reducer;

export const {
    addCompany,
    deleteCompany
} = companiesSlice.actions;