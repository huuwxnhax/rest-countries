import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
});
