import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { WinnerAPIResponse, WinnerObj } from './types';
import { getBaseURL } from '../../../utils/getBaseURL';

const baseURL = getBaseURL({});

export const fetchWinners = createAsyncThunk<WinnerAPIResponse>(
  'winners/fetchWinners',
  async () => {
    const response = await axios.get(`${baseURL}api/winner/`);
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
