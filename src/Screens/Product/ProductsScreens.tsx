import {FlatList, Image, StyleSheet, View} from 'react-native';
import products from '../../data/products';

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <View style={styles.itemContent}>
          <Image style={styles.img} source={item.image} />
        </View>
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
