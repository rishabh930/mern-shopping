import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

import axios from 'axios';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FATCH_REQUST':
      return { ...state, loding: true };
    case 'FATCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FATCH_FAIL':
      return { ...state, loadng: false, error: action.payload };
    default:
      return state;
  }
};

function Productscreen() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  //const [product, setproduct] = useState([]); //use Reduser instade.
  useEffect(() => {
    const fatchdata = async () => {
      dispatch({ type: 'FATCH_REQUEST' });
      try {
        const result = await axios.get(`/api/product/slug/${slug}`);
        dispatch({ type: 'FATCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FATCH_FAIL', payload: err.messge });
      }
      //  setproduct(result.data);
    };
    fatchdata();
  }, [slug]);

  console.log({ slug });
  return loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <h1>{product.slug}</h1>
    </div>
  );
}
export default Productscreen;
