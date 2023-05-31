import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export default createSlice({
    name: 'content',
    initialState: {
        isLoading: false,
        datas: [],
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContentCountries.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchContentCountries.fulfilled, (state, action) => {
                state.datas = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchContentCountries.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const fetchContentCountries = createAsyncThunk('content/fetchContentCountries', async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    // console.log(response.data);
    return response.data;
});
