/**
 * Utilizand Redux with React-Native
 * 
 * @format
 */
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Home } from "./src/home/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from "react-native";



function App(): React.JSX.Element {

  async function requestNotificationPermissions(){
    // Android 13
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );

    if(granted === PermissionsAndroid.RESULTS.GRANTED){
      console.log('Permissão de notificação concedida');
    }else{
      console.log('Permissão negada');
    }
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  
  const getToken = async() => {
    try {
      const token = await messaging().getToken();
      if(token){
        console.log('====================================');
        console.log('token ', token);
        console.log('====================================');
      }else {
        console.log('====================================');
        console.log('nenhum token recebido');
        console.log('====================================');
      }
    } catch (error) {
      console.log('====================================');
      console.log('error', error);
      console.log('====================================');
    }

  }
  
  React.useEffect(()  => {
    requestNotificationPermissions();
    requestUserPermission();
    getToken();

    const sub = messaging().onTokenRefresh(tk => {
      console.log('====================================');
      console.log('token atualizado ', tk);
      console.log('====================================');
    });

    return sub;

  },[])
  
  return (
    <Provider store={store}>
      <SafeAreaProvider >
        <Home />
      </SafeAreaProvider>
    </Provider>

  );
}


export default App;
