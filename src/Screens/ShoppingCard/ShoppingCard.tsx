import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import cart from '../../data/cart';
import CartListItem from '../../components/CartListItem';

const ShoppingFooter = () => {
  const addToCard = () => {}
  return (
    <>
      <View style={[styles.totalContainer]}>
        <View style={styles.row}>
          <Text style={styles.txt}>Subtotal</Text>
          <Text style={styles.txt}>1.400,00 R$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>Entrega</Text>
          <Text style={styles.txt}>120,00 R$</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.txt,{fontWeight: `bold`, color: `black`}]}>Total</Text>
          <Text style={[styles.txt,{fontWeight: `bold`, color: `black`}]}>1.520,00 R$</Text>
        </View>
      </View>

      <Pressable onPress={addToCard} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>

  );

};

const ShoppingCard = () => {
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={ShoppingFooter}
    />
  );
};

export const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    height: 280
  },
  row: {
    flexDirection: `row`,
    justifyContent: "space-between",
    marginVertical: 2
  },
  txt: {
    fontSize: 16,
    fontWeight: `500`
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    width: '90%',
    bottom:30,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center'
},
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize:17
},
})

export default ShoppingCard;