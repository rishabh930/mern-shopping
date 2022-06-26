import express from 'express';
import Product3 from '../models/ProductModel.js';
import data from '../data';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product3.remove({});
  const createdProducts = await Product.insertMany(data.product);
  res.send({ createdProducts });
});
export default seedRouter;
