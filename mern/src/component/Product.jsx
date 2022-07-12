import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/product/${item._id}`);
    console.log(data);
    if (data.productcount < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <div>
        <Link to={`/product/${product.slug}`}>
          <img src={product.img} className="card-img-top" alt={product.name} />
        </Link>

        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text>${product.price}</Card.Text>
          {product.productcount === 0 ? (
            <Button variant="light" disabled>
              Out of stock
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(product)}>
              Add to cart
            </Button>
          )}
        </Card.Body>
      </div>
    </Card>
  );
}
export default Product;
