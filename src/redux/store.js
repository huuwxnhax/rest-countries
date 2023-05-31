import { configureStore } from '@reduxjs/toolkit';
import contentSlice from '../redux/slice/contentSlice';
import filtersSlice from './slice/filtersSlice';

const store = configureStore({
    reducer: {
        content: contentSlice.reducer,
        filters: filtersSlice.reducer,
    },
});

export default store;
