import React, {useState} from 'react';

export const CartContext = React.createContext();

const users = [
  {
    id: 0,
    title: 'Go to japan for best price',
    disc: 'free food',
    price: 100,
    avatar:
      'https://media-server.clubmed.com/image/jpeg/2000/auto/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Fnmea%2F2019%2FB2C%2F341%2FRWD%2Fdestination%2FJapan%2Fjapan_facts.jpg',
  },
  {
    id: 1,
    title: 'Go to japan for best price',
    price: 200,
    disc: 'free food',
    avatar:
      'https://media-server.clubmed.com/image/jpeg/2000/auto/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Fnmea%2F2019%2FB2C%2F341%2FRWD%2Fdestination%2FJapan%2Fjapan_facts.jpg',
  },
  {
    id: 2,
    title: 'Go to japan for best price',
    price: 300,
    disc: 'free food',
    avatar:
      'https://media-server.clubmed.com/image/jpeg/2000/auto/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Fnmea%2F2019%2FB2C%2F341%2FRWD%2Fdestination%2FJapan%2Fjapan_facts.jpg',
  },
  {
    id: 3,
    title: 'Go to japan for best price',
    price: 400,
    disc: 'free food',
    avatar:
      'https://media-server.clubmed.com/image/jpeg/2000/auto/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Fnmea%2F2019%2FB2C%2F341%2FRWD%2Fdestination%2FJapan%2Fjapan_facts.jpg',
  },
];

export const CartProvider = props => {
  const [cart, setCart] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState(users);
  const [inCart, setInCart] = useState([]);
  const [product, setProduct] = useState(false);
  const [home, setHome] = useState(true);
  const [cartPage, setCartPage] = useState(false);
  const [active, setActive] = useState(false);
  const [idNumber, setId] = useState(3);

  const state = {
    cart,
    setCart,
    quantity,
    setQuantity,
    data,
    setData,
    inCart,
    setInCart,
    cartPage,
    setCartPage,
    home,
    setHome,
    product,
    setProduct,
    active,
    setActive,
    idNumber,
    setId,
  };
  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};
