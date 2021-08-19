import React, {useContext} from 'react';
import {CartContext} from '../context/state';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const contextValue = useContext(CartContext);
  const addToCartHome = () => {
    contextValue.setProduct(true);
    contextValue.setHome(false);
    contextValue.setCartPage(false);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {contextValue.data.map((card, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.card}
              onPress={() => contextValue.setId(card.id)}>
              <Image
                style={styles.cardImage}
                source={{
                  uri: card.avatar,
                }}></Image>
              <Text style={styles.cardText}>{card.title}</Text>
              <Text style={styles.cardDisc}>{card.disc}</Text>
              <View style={styles.cardPrice}>
                <Button
                  color="gray"
                  title="View Deal"
                  style={styles.buttonView}
                  onPress={() => {
                    contextValue.setId(card.id),
                      contextValue.setProduct(true),
                      contextValue.setHome(false);
                  }}
                />
                <Text style={styles.cardTextPrice}>
                  {card.price}/{contextValue.idNumber}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  safeView: {
    marginBottom: 10,
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
  cardImage: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  cardPrice: {
    width: '100%',
    height: 50,
    resizeMode: 'cover',
    backgroundColor: '#39abf2',
    borderRadius: 3,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 16,
    padding: 10,
  },
  cardDisc: {
    fontSize: 10,
    padding: 10,
    color: 'gray',
  },
  cardTextPrice: {
    fontSize: 18,
    padding: 10,
    color: 'white',
  },
  buttonView: {
    borderRadius: 20,
  },
});

export default Home;
