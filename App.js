import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './assets/colors/colors';
import House from './assets/svg/House.svg';
import Carts from './assets/svg/Carts.svg';
import Profiles from './assets/svg/Profiles.svg';
import CartsSvg from './assets/iconComponents/CartsSvg';
import ProfilesSvg from './assets/iconComponents/ProfilesSvg';
import HouseSvg from './assets/iconComponents/HouseSvg';
import FilterSearchInput from './components/reusableComponent/FilterSearchInput';

// Entypo.loadFont();
// MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
  return(
    <Tab.Navigator 
       tabBarOptions={{
          style: styles.tabBar,
          activeTintColor: colors.green,
          inactiveTintColor: colors.grey,
          showLabel: false
       }}>
      <Tab.Screen name="Home" component={Home} 
        options={{tabBarIcon: ({color}) => <HouseSvg fill={color} />
        }}
        />
      <Tab.Screen name="Cart" component={Cart} 
        options={{tabBarIcon: ({color}) => 
            <CartsSvg  fill={color}/>
        }}
        />
      <Tab.Screen name="Profile" component={Profile} 
        options={{tabBarIcon: ({color}) => <ProfilesSvg fill={color}/>
        }}
        />

    </Tab.Navigator>
  )
}
const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={colors.green}></StatusBar>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  changeStyle:{
    width: 50,
    height: 50,
    fontSize: 50,
    color: 'red'
  }
})

export default App;