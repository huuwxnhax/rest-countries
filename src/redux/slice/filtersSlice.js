import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
// import axios from 'axios';

export default createSlice({
    name: 'filters',
    initialState: {
        region: 'All',
        search: '',
        filterData: [],
    },
    reducers: {
        selectFiltersRegion: (state, action) => {
            state.region = action.payload;
        },
        selectFiltersSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});
