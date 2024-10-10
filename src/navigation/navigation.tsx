import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from '../Screens/Product/ProductsScreens';
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingCard from "../Screens/ShoppingCard/ShoppingCard";
import ProductDetails from '../Screens/ProductDetails/ProductDetails';

const Navigation = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Product" component={ProductsScreen} />
                <Stack.Screen name="detailsProductos" component={ProductDetails} />
                <Stack.Screen name="ShoppingCard" component={ShoppingCard} />
            </Stack.Navigator>
            <ProductsScreen />
        </NavigationContainer>
    )
}

export default Navigation;