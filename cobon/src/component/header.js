import React, {useContext} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-paper';
import {CartContext} from '../context/state';
import {Drawer} from 'react-native-paper';

const MyComponent = () => {
  const contextValue = useContext(CartContext);
  const goHome = () => {
    contextValue.setHome(true);
    contextValue.setActive(false);
    contextValue.setProduct(false);
    contextValue.setCartPage(false);
  };

  if (contextValue.active) {
    return (
      <View style={styles.menu}>
        <Drawer.Section title="Menu">
          <Drawer.Item
            label="X"
            onPress={() => contextValue.setActive(false)}
          />
          <Drawer.Item label="Home Page" onPress={goHome} />
        </Drawer.Section>
      </View>
    );
  } else return null;
};

const Header = () => {
  const contextValue = useContext(CartContext);

  const goCart = () => {
    contextValue.setHome(false);
    contextValue.setActive(false);
    contextValue.setProduct(false);
    contextValue.setCartPage(true);
  };
  return (
    <>
      <MyComponent />

      <View style={styles.header}>
        <TouchableOpacity onPress={goCart}>
          <Badge>{contextValue.cart}</Badge>
          <Text>
            <FontAwesome5 name={'shopping-cart'} size={20} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => contextValue.setActive(true)}>
          <FontAwesome5 name={'bars'} size={23} />
          <Text></Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    height: 70,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    position: 'relative',
    height: '100%',
    width: '50%',
  },
});

export default Header;
