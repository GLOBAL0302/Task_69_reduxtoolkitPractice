import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITvShows } from '../../types';
import axios from 'axios';
import { RootState } from '../store';

export const createFetchShows = createAsyncThunk<ITvShows[],void, {state:RootState}>(
  "shows/fetchShows",
  async(arg)=>{
    const {data: tvShowResponse} = await axios.get(`https://api.tvmaze.com/search/shows?q=${arg}`);
    let newTvShows:ITvShows[] = [];
    if(tvShowResponse){
      newTvShows = Object.keys(tvShowResponse).map((item:string)=>({
        name: tvShowResponse[item].show.name,
        id: tvShowResponse[item].show.id
      }));
    }
    return newTvShows;
  }
);