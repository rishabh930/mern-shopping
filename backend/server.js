import express from 'express';
import data from './data.js';
import cors from 'cors';
const app = express();

app.use(cors());

app.get('/api/product', (req, res) => {
  res.send(data.product);
});
app.get('/api/product/slug/:slug', (req, res) => {
  // const slug = ;
  // const pro = ;
  const products = data.product.find((x) => x.slug == req.params.slug);
  console.log(products);

  if (products) {
    console.log(products);
    res.send(products);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
