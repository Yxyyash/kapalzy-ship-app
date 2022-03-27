import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/fontisto';

import Stack from '../screens/stack'
import Pesan from './pesanan-saya'
import Lainnya from './lainnya.js'
import Batal from '../screens/batal.js'

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Stack}options={{headerShown: false, tabBarIcon: () => (<Icon name={'ship'} size={32}  />)}}/>
        <Tab.Screen name="Pesanan Saya" component={Pesan}options={{headerShown: false, tabBarIcon: () => (<Icon name={'sait-boat'} size={32}  />)}}/>
        <Tab.Screen name="Pembatalan" component={Batal}options={{headerShown: false, tabBarIcon: () => (<Icon name={'close-a'} size={32}  />)}}/>
        <Tab.Screen name="Lainnya" component={Lainnya}options={{headerShown: false, tabBarIcon: () => (<Icon name={'nav-icon'} size={32}  />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;  