import express from 'express';
import Product from '../models/ProductModel.js';

const ProductRouter = express.Router();

ProductRouter.get('/', async (req, res) => {
  const product = await Product.find();

  res.send(product);
});

ProductRouter.get('/slug/:slug', async (req, res) => {
  const products = await Product.findOne({ slug: req.params.slug });
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
ProductRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default ProductRouter;
