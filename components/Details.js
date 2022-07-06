import React from 'react';
import { StatusBar, Text, View, Button } from 'react-native'

const Details = ({navigation}) => {
    return (
        <View>
            
            <Text>Details</Text>
            <Button
                title="Next screen"
                onPress={() => navigation.navigate('Home')}
                color="#fff"
            />
        </View>
    );
};
export default Details