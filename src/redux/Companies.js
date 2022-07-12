import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const companiesSlice = createSlice({
    name: 'companies',
    initialState:{
       companiesFormData: []
    },
    reducers:{
        setCompaniesFormData: (state, action) => {
            state.companiesFormData = {
                id: nanoid(),
                companiesName: "",
                firstName: "",
                lastName: "",
                companiesStreet: "",
                companiesStreetNumber: "",
                companiesZip: "",
                companiesCity: "",
                companiesCountry: "",
                companiesPhone: "",
                companiesEmail: "",
                companiesWebsite: "",
            }
        },
        removeCompaniesFormData: (state, {payload}) => {
            state.companiesFormData = state.companiesFormData.filter(({id}) => id !== payload);
        },
        handleCompaniesFormDataChange: (state,{payload}) => {
             state.companiesFormData = payload;
        }

    }

})

export const { setCompaniesFormData, removeCompaniesFormData, handleCompaniesFormDataChange} = companiesSlice.actions;

export const companiesReducer = companiesSlice.reducer;
