import { configureStore } from '@reduxjs/toolkit';
import { showReducer } from './reduxSlices/searchShowSlice';
import { searchOneShowReducer } from './reduxSlices/searchOneShow';

export const store = configureStore({
  reducer:{
    show: showReducer,
    showOne:searchOneShowReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch