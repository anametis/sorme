type Product = {
  id: string;
  category: string;
  subcategory: string;
  brand: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
};

type ProductList = Product[];

const products: ProductList = [
  {
    id: "1",
    category: "Clothing",
    subcategory: "T-shirts",
    brand: "Nike",
    name: "Air Max 97",
    price: 299.99,
    description:
      "The Air Max 97 is a lightweight, breathable, and comfortable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "2",
    category: "Clothing",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 299.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "3",
    category: "Clothing",
    subcategory: "T-shirts",
    brand: "Nike",
    name: "Air Max 97",
    price: 299.99,
    description:
      "The Air Max 97 is a lightweight, breathable, and comfortable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "4",
    category: "Clothing",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 299.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "5",
    category: "Clothing",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 299.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "6",
    category: "cosmetics",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 299.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "7",
    category: "cosmetics",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 299.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "8",
    category: "Clothing",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 299.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "9",
    category: "Clothing",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 299.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
  {
    id: "10",
    category: "cosmetics",
    subcategory: "T-shirts",
    brand: "Adidas",
    name: "Superstar",
    price: 1000.99,
    description:
      "The Superstar is a high-performance, lightweight, and breathable shirt that is perfect for everyday wear. It is made of a blend of polyester and spandex, which makes it stretchy and durable. The shirt is available in a variety of colorss, including black, white, and red.",
    image:
      "https://images.unsplash.com/photo-1500645532-ae0d1d0ee1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
  },
];

export default products;