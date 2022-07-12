import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'rishabh',
      email: 'rishabh@gmail.com',
      password: bcrypt.hashSync('rishabh'),
      isAdmin: true,
    },
    {
      name: 'rishabh2',
      email: 'rishabh2@gmail.com',
      password: bcrypt.hashSync('12344'),
      isAdmin: false,
    },
    {
      name: 'rishabh5',
      email: 'rishabh21@gmail.com',
      password: bcrypt.hashSync('12344556'),
      isAdmin: false,
    },
  ],
  product: [
    {
      slug: 'slim-shirt',
      name: ' Slim-shirt',
      catagary: 'Shirt',
      img: '/images/2.jpg',
      price: 3000,
      barnd: 'Nike',
      rating: 4.6,
      numreviews: 10,
      productcount: 7,
      Discription: 'high Qulity',
    },
    {
      slug: 'Adidass-slim-shirt',
      name: 'Adidas Slim-shirt',
      catagary: 'Shirt',
      img: '/images/3.jpg',
      price: 3000,
      barnd: 'Adidas',
      rating: 4.6,

      productcount: 7,

      numreviews: 10,
      Discription: 'high Qulity',
    },
    {
      slug: 'slim-pants',
      name: ' Slim-pants',
      catagary: 'pants',
      img: '/images/1.jpg',
      price: 3000,
      barnd: 'Nike',
      rating: 4.6,
      numreviews: 10,
      Discription: 'high Qulity',
      productcount: 0,
    },
  ],
};
export default data;
