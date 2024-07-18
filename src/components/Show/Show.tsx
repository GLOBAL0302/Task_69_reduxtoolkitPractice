import { useParams } from 'react-router-dom';

const Show = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <>
      <h3 className="bg-white">
        hello{id}
      </h3>
    </>
  );
};

export default Show;