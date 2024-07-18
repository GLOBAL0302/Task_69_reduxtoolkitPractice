import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { useEffect } from 'react';
import { createFetchShow} from '../../redux/reduxSlices/searchShowThunk';

const Show = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const oneShow = useAppSelector(state => state.showOne.oneShow);

  useEffect(() => {
    dispatch(createFetchShow(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="bg-white p-3 d-flex gap-2">
        <img src={oneShow.img} alt='' />
        <div>
          <h3>{oneShow.name}</h3>
          <p dangerouslySetInnerHTML={{__html: oneShow.summary}}></p>
        </div>
      </div>
    </>
  );
};

export default Show;