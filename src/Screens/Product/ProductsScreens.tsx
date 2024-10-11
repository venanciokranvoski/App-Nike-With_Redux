import React from 'react';
import {FlatList, Image, StyleSheet, Pressable} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../../store/productsSlice';

const ProductsScreen = ({navigation}: any) => {

  const dispatch = useDispatch();
  
  const products = useSelector((state: any) => state.products.products);
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <Pressable 
          onPress={() => {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('ProductDetails')
          }} 
          style={styles.itemContent}>
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
