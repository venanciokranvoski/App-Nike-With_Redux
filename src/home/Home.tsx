import React from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import Navigation from '../navigation/navigation';

export  function Home() {
  return (
    <View style={styles.container}>
      <Navigation />
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