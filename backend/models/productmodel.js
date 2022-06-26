import mongoose from 'mongoose';

const productShema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    catagary: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    barnd: { type: String, required: true },
    rating: { type: Number, required: true },
    numreviews: { type: Number, required: true },
    productcount: { type: Number, required: true },
    Discription: { type: String, required: true },
  },
  { timestamps: true }
);
const Product3 = mongoose.model('product', productShema);
export default Product3;
