import Data from '../data';

const Homescreen = () => {
  return (
    <div>
      <h1 className="heding">Feature Items</h1>
      <div className="prodects">
        {Data.product.map((product) => (
          <div className="product" key={product.slug}>
            <a href={product.slug}>
              <img src={product.img} alt={product.name} />
            </a>
            <div className="pro-info">
              <a href={product.slug}>
                <p>{product.name}</p>
              </a>
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
