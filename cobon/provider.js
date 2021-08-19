import React, {useContext} from 'react';
import {CartContext} from './src/context/state';
import HomePage from './src/component/homePage';
import Product from './src/component/productScreen';
import Header from './src/component/header';
import Cart from './src/component/cartScreen';
import {CartProvider} from './src/context/state';

const App = () => {
  const contextValue = useContext(CartContext);

  if (contextValue.home) {
    return (
      <>
        <Header />
        <HomePage />
      </>
    );
  } else if (contextValue.product) {
    return (
      <>
        <Header />
        <Product />
      </>
    );
  } else if (contextValue.cartPage) {
    return (
      <>
        <Header />
        <Cart />
      </>
    );
  } else
    return (
      <>
        <Header />
        <HomePage />
      </>
    );
};

export default App;
