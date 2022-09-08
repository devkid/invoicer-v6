import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSwitchMode = createAsyncThunk('switchMode/fetchSwitchMode', async() => {
    // save await fetch in variable, so that you can access the data
   const result = await fetch('http://localhost:3000/db.json')

    // check if fetch failed
    if (!result.ok) {
        // errorHandling
    }

    // Last part of fetch to json
    const jsonResult = await result.json()
    console.log('jsonResult', jsonResult);

    return jsonResult;
});