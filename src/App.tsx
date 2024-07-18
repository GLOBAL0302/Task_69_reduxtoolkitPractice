import './App.css';
import Header from './components/Header/Header';
import  { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { createFetchShows } from './redux/reduxSlices/searchShowThunk';

import { NavLink, Route, Routes } from 'react-router-dom';
import UserInput from './components/UserInput/UserInput';
import Shows from './components/Shows/Shows';
import Show from './components/Show/Show';






const App = () => {


  return (
    <>
      <Header/>
      <div className="container">
       <UserInput/>
        <Shows/>
        <Routes>
          <Route path={"shows/:id/"} element={<Show/>}/>
          <Route path="*" element={"No Page Found"}/>
        </Routes>

      </div>

    </>
  );
};

export default App;
