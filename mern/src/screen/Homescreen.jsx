import { useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../component/Product';
import Loading from '../component/Loading';
// import logger from 'use-reducer-logger';/
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

const Homescreen = () => {
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
        const result = await axios.get('/api/product');
        dispatch({ type: 'FATCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FATCH_FAIL', payload: err.messge });
      }
      //  setproduct(result.data);
    };
    fatchdata();
  }, []);
  return (
    <div>
      <Helmet>
        <title>shoopingapp</title>
      </Helmet>
      <h1 className="heding">Feature Items</h1>
      <div className="prodects">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {product.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};
export default Homescreen;
