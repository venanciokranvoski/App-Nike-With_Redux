import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from '../Screens/Product/ProductsScreens';
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingCard from "../Screens/ShoppingCard/ShoppingCard";
import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import { Pressable, Text } from "react-native";
import  FontAwesone5  from 'react-native-vector-icons/FontAwesome5';

const Navigation = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Product" 
                    component={ProductsScreen}
                    options={({navigation}) => ({
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('ShoppingCard')} style={{flexDirection: 'row', marginRight: 10}}>
                                    <FontAwesone5 name="shopping-cart" size={18} color={'black'} />
                                    <Text style={{marginLeft: 5, fontWeight: '500', color:'black'}}>1</Text>
                            </Pressable>
                        )
                    })} 
                />
                <Stack.Screen 
                    name="ProductDetails" 
                    component={ProductDetails} 
                    options={{presentation: 'modal'}} 
                />
                <Stack.Screen 
                    name="ShoppingCard"
                    component={ShoppingCard} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;