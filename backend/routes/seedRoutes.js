import express from 'express';
import Product from '../models/ProductModel.js';
import data from '../data.js';
const SeedRouter = express.Router();

SeedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.product);
  res.send({ createdProduct });
});
export default SeedRouter;
