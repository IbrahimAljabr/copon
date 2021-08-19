import React from 'react';

import Provider from './provider';

import {CartProvider} from './src/context/state';

const App = () => {
  return (
    <CartProvider>
      <Provider />
    </CartProvider>
  );
};

export default App;
