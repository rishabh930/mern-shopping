import { Link } from 'react-router-dom';
import Data from '../data';

const Homescreen = () => {
  return (
    <div>
      <h1 className="heding">Feature Items</h1>
      <div className="prodects">
        {Data.product.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.img} alt={product.name} />
            </Link>
            <div className="pro-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>{product.price}</p>
              <button type="button">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Homescreen;
