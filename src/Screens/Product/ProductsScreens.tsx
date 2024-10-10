import React from 'react';
import {FlatList, Image, StyleSheet, Pressable} from 'react-native';
import products from '../../data/products';




const ProductsScreen = ({navigation}: any) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('ProductDetails')} style={styles.itemContent}>
          <Image style={styles.img} source={item.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContent: {
    width: '50%',
    padding: 1,
  },
  img: {
    width: 200,
    height: 110,
    marginBottom: 60,
  },
});

export default ProductsScreen;
