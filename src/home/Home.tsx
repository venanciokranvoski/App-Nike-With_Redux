import React from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
// import ProductsScreen from '../Screens/Product/ProductsScreens';
// import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import ShoppingCard from '../Screens/ShoppingCard/ShoppingCard';

export  function Home() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductDetails /> */}
      <ShoppingCard />

      <StatusBar barStyle={'default'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },

})



    // const count = useSelector(selectCount);
    // const dispatch = useDispatch();
// <Text>Exemplo Redux</Text>
// <Text>Contagem {count}</Text>
// <Button title='incremento'  onPress={()=> dispatch(increment())}></Button>
// <Button title='decremento'  onPress={()=> dispatch(decrement())}></Button>