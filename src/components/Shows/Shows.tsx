import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { createFetchShows } from '../../redux/reduxSlices/searchShowThunk';

const Shows = () => {
  const dispatch = useAppDispatch();
  const options = useAppSelector(state => state.show.shows);

  useEffect( () => {
    dispatch(createFetchShows());
  }, [dispatch]);
  return (
    <div className="">
      <div className="text-black bg-white p-3" style={{ overflow: 'auto' }}>
        {options.map((item) => (
            <div key={item.id}>
              <button>
                <NavLink to={`/shows/${item.id}`}>{item.name}</NavLink>
              </button>
            </div>
        ))}
      </div>

    </div>
  );
};

export default Shows;