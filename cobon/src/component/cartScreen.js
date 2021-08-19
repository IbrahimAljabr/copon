import React, {useContext} from 'react';
import {CartContext} from '../context/state';
import {Card, Button} from 'react-native-paper';
import {StyleSheet, View, Text, Image} from 'react-native';
const Cart = () => {
  const contextValue = useContext(CartContext);
  const AddOneCart = () => {
    contextValue.setQuantity(contextValue.quantity + 1);
    contextValue.setCart(contextValue.Cart + 1);
  };
  const AddOne = () => (
    <Button mode="text" color="#cecece" mode="contained" onPress={AddOneCart}>
      +
    </Button>
  );
  const TakeOneCart = () => {
    contextValue.setQuantity(contextValue.quantity - 1);
    contextValue.setCart(contextValue.Cart - 1);
    if (contextValue.Cart === 0) {
      contextValue.setInCart([]);
    }
  };
  const TakeOne = () => (
    <Button
      style={styles.buttonView}
      color="#cecece"
      mode="contained"
      onPress={TakeOneCart}>
      -
    </Button>
  );

  return (
    <>
      {contextValue.inCart.map((item, idx) => (
        <Card key={idx}>
          <Card.Actions>
            <Image
              style={styles.cardImage}
              source={{
                uri: item.avatar,
              }}></Image>

            <View>
              <View>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.cardPrice}>
                <AddOne />
                <Text style={styles.cardTextPrice}>
                  {contextValue.quantity}
                </Text>
                <TakeOne />
                <Text style={styles.cardTextPrice}>
                  {item.price * contextValue.quantity}
                </Text>
              </View>
            </View>
          </Card.Actions>
        </Card>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  cardImage: {
    width: '33%',
    height: 120,
    resizeMode: 'cover',
    marginRight: 8,
    borderRadius: 3,
  },

  cardDisc: {
    fontSize: 10,
    padding: 10,
    color: 'gray',
  },

  cardPrice: {
    width: '50%',
    borderRadius: 3,
    marginTop: 78,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardTextPrice: {
    fontSize: 14,
    color: 'black',
    padding: 10,
  },
  buttonCart: {
    width: '100%',
  },
});
export default Cart;
