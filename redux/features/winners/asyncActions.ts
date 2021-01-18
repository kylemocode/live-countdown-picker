import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { WinnerAPIResponse, WinnerObj } from './types';

export const fetchWinners = createAsyncThunk<WinnerAPIResponse>(
  'winners/fetchWinners',
  async () => {
    const response = await axios.get('/api/winner/');
    return response.data;
  }
)

export const recordWinners = createAsyncThunk<WinnerObj, string>(
  'winners/recordWinners',
  async (winnerName) => {
    const response = await axios.post('/api/winner/create', {
      winnerName
    });
    return response.data;
  }
)
