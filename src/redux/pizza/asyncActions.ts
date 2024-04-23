import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Pizza, SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, URL } = params;
    const { data } = await axios.get<Pizza[]>(
      `${URL}${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);
