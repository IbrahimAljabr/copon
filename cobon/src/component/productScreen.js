import React, {useContext} from 'react';
import {Button} from 'react-native-paper';
import {CartContext} from '../context/state';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const Home = () => {
  const contextValue = useContext(CartContext);
  const AddOne = () => (
    <Button
      title="plus"
      color="#cecece"
      mode="contained"
      onPress={() => contextValue.setQuantity(contextValue.quantity + 1)}>
      +
    </Button>
  );
  const TakeOne = () => (
    <Button
      style={styles.buttonView}
      color="#cecece"
      mode="contained"
      onPress={() => contextValue.setQuantity(contextValue.quantity - 1)}>
      -
    </Button>
  );
  const addToCartItems = () => {
    contextValue.setCart(contextValue.cart + contextValue.quantity);
    contextValue.setInCart([contextValue.data[contextValue.idNumber]]);
  };
  const ToTheCartButton = () => (
    <Button
      style={styles.buttonCart}
      color="#cecece"
      mode="contained"
      onPress={addToCartItems}>
      Add The Cart {contextValue.idNumber}
    </Button>
  );
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.fullCard}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.card}>
            <Text style={styles.cardText}>
              Go to japan for best price with so many other ppl
            </Text>

            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://media-server.clubmed.com/image/jpeg/2000/auto/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Fnmea%2F2019%2FB2C%2F341%2FRWD%2Fdestination%2FJapan%2Fjapan_facts.jpg',
              }}></Image>
            <View style={styles.cardTime}>
              <Text style={{textAlign: 'center', padding: 10}}>
                For limited time
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  borderWidth: 2,
                  padding: 8,
                  marginRight: '30%',
                  marginLeft: '30%',
                  color: 'green',
                  borderColor: 'green',
                }}>
                542 BOUGHT
              </Text>
            </View>
            <View>
              <Text style={styles.cardText}>Go to japan for best price</Text>
              <Text style={styles.cardDisc}>
                {contextValue.data[contextValue.idNumber].price}
              </Text>
            </View>
            <View>
              <View style={styles.cardPrice}>
                <AddOne />
                <Text style={styles.cardTextPrice}>
                  {contextValue.quantity}
                </Text>
                <TakeOne />
                <Text style={styles.cardTextPrice}>Quantity</Text>
              </View>
            </View>
            <ToTheCartButton />
            <View>
              <Text style={styles.cardText}>Highlights</Text>
              <Text>Best Way </Text>
              <Text> Deals </Text>
              <Text> Menu</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    borderRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  fullCard: {
    backgroundColor: '#FFF',
    marginBottom: 38,
  },
  cardImage: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    borderRadius: 3,
  },

  cardText: {
    fontSize: 16,
    padding: 10,
    color: 'black',
  },
  cardDisc: {
    fontSize: 10,
    padding: 10,
    color: 'gray',
  },

  cardTime: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    backgroundColor: '#ececec',
    textAlign: 'center',
  },
  cardPrice: {
    width: '100%',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardTextPrice: {
    fontSize: 18,
    color: 'black',
  },
  buttonCart: {
    width: '100%',
    marginTop: 20,
  },
});

export default Home;
