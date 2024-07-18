import { ITvShows } from '../../types';
import {createSlice } from '@reduxjs/toolkit';
import {createFetchShows } from './searchShowThunk';

export interface TvShowState{
  shows: ITvShows[],
  fetchLoading:boolean,
}

const initialState: TvShowState={
  shows:[],
  fetchLoading: false
};

export const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
      .addCase(createFetchShows.pending, (state)=>{
      state.fetchLoading = true;
    })
      .addCase(createFetchShows.fulfilled, (state, {payload:items}) => {
        state.fetchLoading = false;
        state.shows = items;
      })
      .addCase(createFetchShows.rejected, state => {
        state.fetchLoading = false;
      });
  },
  selectors:{
    selectShow: (state) => state.shows,
    fetchLoading:(state)=> state.fetchLoading}}
);

export const showReducer = showSlice.reducer;
export const {selectShow, fetchLoading} =  showSlice.selectors;
