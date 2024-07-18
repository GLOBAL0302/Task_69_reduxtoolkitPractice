import React, { useState } from 'react';
import { useAppDispatch} from '../../redux/hooks';
import { createFetchShows } from '../../redux/reduxSlices/searchShowThunk';

const UserInput = () => {

  const [userInput, setUserInput] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setUserInput(event.target.value);
    dispatch(createFetchShows(userInput));
  };

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Search for Tv shows</span>
        <input
          onChange={onChange}
          name="userInput"
          id="userInput"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default" />
      </div>
    </div>
  );
};

export default UserInput;