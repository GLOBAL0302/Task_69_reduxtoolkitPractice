import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITvShow, ITvShows } from '../../types';
import axios from 'axios';
import { RootState } from '../store';

export const createFetchShows = createAsyncThunk<ITvShows[],void, {state:RootState}>(
  "shows/fetchShows",
  async(arg)=>{
    const {data: tvShowsResponse} = await axios.get(`https://api.tvmaze.com/search/shows?q=${arg}`);
    let newTvShows:ITvShows[] = [];
    if(tvShowsResponse){
      newTvShows = Object.keys(tvShowsResponse).map((item:string)=>({
        name: tvShowsResponse[item].show.name,
        id: tvShowsResponse[item].show.id
      }));
    }
    return newTvShows;
  }
);

export const createFetchShow = createAsyncThunk<ITvShow, void, {state:RootState}>(
  "show/fetchShow",
  async(arg)=>{
    const {data: tvShowResponse} = await axios.get(`http://api.tvmaze.com/shows/${arg}`);
    let oneShow;
    if(tvShowResponse){
      oneShow =  {
        name: tvShowResponse.name,
        img: tvShowResponse.image.medium,
        summary:tvShowResponse.summary
      };
    }
    return oneShow;
  }
);