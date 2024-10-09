import { FlatList} from 'react-native';
import cart from '../../data/cart';
import CartListItem from '../../components/CartListItem';


const ShoppingCard = () => {
    return (
        <FlatList 
            data={cart}
            renderItem={({item})=> <CartListItem cartItem={item} />}
        />
    )
}

export default ShoppingCard;

