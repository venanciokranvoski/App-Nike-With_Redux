    import React from 'react';
    import {
    View,
    StyleSheet,
    Image,
    FlatList,
    useWindowDimensions,
    Text,
    ScrollView,
    Pressable,
    } from 'react-native';
    import products from '../../data/products';

    function ProductDetails() {
    const product = products[0];

    const {width, height} = useWindowDimensions();
    return (
        <View>
        {/* {Image carrousel} */}
        <ScrollView>
            <FlatList
            data={product.images}
            renderItem={({item}) => (
                <Image source={item} style={{width: width, aspectRatio: 1}} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            />

            <View style={{padding: 20,  height: height}}>
            {/* Title */}
            <Text style={styles.title}>{product.name}</Text>

            {/* Price */}
            <Text style={styles.price}>${product.price}</Text>

            {/* Price */}
            <Text style={styles.description}>{product.description}</Text>
            </View>
        </ScrollView>

        {/* add to card  */}
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>

        {/* navigation icon */}
        </View>
    );
    }

    const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
        color: '#000000',
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        color: '#000000',
        letterSpacing: 1.7,
    },
    description: {
        fontSize: 18,
        fontWeight: '300',
        lineHeight: 30,
        marginVertical: 10,
        color: '#000000',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
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
    });

    export default ProductDetails;
