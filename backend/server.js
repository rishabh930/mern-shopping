import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routes/prodectRouter.js';
import seedRouter from './routes/seedRoutes';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connect to db');
  })
  .catch((err) => {
    console.log(err.message);
  });


const app = express();
app.use('/api/seed',seedRouter);
app.use('/api/product', productRouter);
// app.get('/api/product', (req, res) => {
//   res.send(data.product);
// });
// app.get('/api/product/slug/:slug', (req, res) => {
//   const products = data.product.find((x) => x.slug == req.params.slug);

//   if (products) {
//     res.json(products);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });
// app.get('/api/products/:id', (req, res) => {
//   const products = data.product.find((x) => x._id === req.params.id);

//   if (products) {
//     res.send(products);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
