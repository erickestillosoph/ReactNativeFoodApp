
import React from 'react';
import { StatusBar, Text, View, SafeAreaView, Button, Dimensions } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

// Colors
import colors from '../assets/colors/colors';
const Cart = ({navigation}) => {
    return (
        <View>
            <SafeAreaView>
              
                <Text>Cart</Text>
                <Text>Height {height}</Text>
                <Text>Width {width}</Text>
                
            </SafeAreaView>
        </View>
    );
};
export default Cart