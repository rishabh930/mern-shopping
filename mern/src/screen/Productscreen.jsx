import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Badge from 'react-bootstrap/esm/Badge';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { Store } from '../Store';
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
  const navigate = useNavigate();
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

  const { state, dispatch: ctxDispatch } = useContext(Store);
  // const addtocartHander = () => {
  //   ctxDispach({ type: 'CART_ADD_ITEM', payload: { ...product, quntity: 1 } });
  // };
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/product/${product._id}`);
    if (data.productcount < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    // const { state, dispatch: ctxDispatch } = useContext(Store);
    // const addToCartHandler = () => {
    console.log(product._id);
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    navigate('/cart');
  };

  return loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img className="img-large" src={product.img} alt={product.name} />
        </Col>
        <Col md={3}>
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <ListGroup variant="fluse">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <h1>
                <span>price:</span>${product.price}
              </h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{product.Discription}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              {product.productcount > 0 ? (
                <Badge bg="success">IN stock</Badge>
              ) : (
                <Badge bg="danger">out of stock</Badge>
              )}
            </ListGroupItem>
            {product.productcount > 0 && (
              <ListGroupItem>
                <div className="d-grid">
                  <Button onClick={addToCartHandler}>add to Cart</Button>
                </div>
              </ListGroupItem>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
export default Productscreen;
