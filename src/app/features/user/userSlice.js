import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/getUsers', async (dispatch, getState) => {
  try {
    const responsed = axios.get('https://jsonplaceholder.typicode.com/users');
    return (await responsed).data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  users: [],
  status: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = 'loading......';
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'success';
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default userSlice.reducer;
