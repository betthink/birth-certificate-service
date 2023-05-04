// import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeAdminScreen from './HomeAdminScreen';
import KelolaRiwayatAntrianScreen from './KelolaRiwayatAntrianScreen';
import KelolaAntrianPage from './KelolaAntrianPage';
import KelolaUserScreen from './KelolaUserScreen';
import {hijau} from '../../Assets/StylingComponent/Coloring';
import {View, Dimensions} from 'react-native';
import {CardStyleInterpolators} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
function AdminPageNavigation({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="HomeAdminScreen"
      screenOptions={({route}) => ({
        // cardStyleInterpolator: ,
     
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        tabBarActiveTintColor: hijau,
        tabBarInactiveTintColor: 'grey',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'HomeAdminScreen':
              iconName = focused ? 'home-circle' : 'home-circle-outline';
              break;
            case 'KelolaRiwayatAntrianScreen':
              iconName = focused ? 'history' : 'history';
              break;
            case 'KelolaUserScreen':
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
              break;
            case 'KelolaAntrianPage':
              iconName = focused ? 'view-list' : 'view-list';
              break;
            default:
              break;
          }
          const {width} = Dimensions.get('window');
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="HomeAdminScreen"
        component={HomeAdminScreen}
        initialParams={{}}
        options={{
          
          tabBarLabel: 'Home',
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="KelolaRiwayatAntrianScreen"
        component={KelolaRiwayatAntrianScreen}
        options={{
          tabBarLabel: 'Riwayat Antrian',
          title: 'Riwayat',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="KelolaUserScreen"
        component={KelolaUserScreen}
        options={{
          tabBarLabel: 'Kelola User',
          title: 'Kelola User',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="KelolaAntrianPage"
        component={KelolaAntrianPage}
        options={{
          // tabBarLabel: 'Antrian',
          // headerStyle: CardStyleInterpolators.forHorizontalIOS,
          title: 'Antriann',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default AdminPageNavigation;
