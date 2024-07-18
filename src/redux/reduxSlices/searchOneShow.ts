import { ITvShow } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { createFetchShow } from './searchShowThunk';

export interface oneShowSlice {
  oneShow:ITvShow;
  loading: boolean;
}

const initialState:oneShowSlice = {
  oneShow:{
    img:"",
    name:"",
    summary:""
  },
  loading: false
};

const searchOneShowSlice = createSlice({
  name: "searchOne",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(createFetchShow.pending, state => {
      state.loading = true;
    })
      .addCase(createFetchShow.fulfilled, (state, {payload:item}) => {
        state.oneShow = item;
        state.loading = false;
      })
      .addCase(createFetchShow.rejected, state => {
        state.loading = false;
      });
  }
});

export const searchOneShowReducer = searchOneShowSlice.reducer;