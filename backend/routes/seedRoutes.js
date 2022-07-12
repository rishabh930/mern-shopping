import express from 'express';
import Product from '../models/ProductModel.js';
import User from '../models/UserModel.js';
import data from '../data.js';
const SeedRouter = express.Router();

SeedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.product);
  await User.remove({});
  const createdUser = await User.insertMany(data.Users);
  res.send({ createdProduct, createdUser });
});
export default SeedRouter;
