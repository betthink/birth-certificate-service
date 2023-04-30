import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';

const Tab = createMaterialTopTabNavigator();

function KelTerdaftar () {
  return (
    <View>
      <Text>KelTerdaftar</Text>
    </View>
  )
}
function KelDiproses () {
  return (
    <View>
      <Text>KelDiproses</Text>
    </View>
  )
}
function KelDitolak () {
  return (
    <View>
      <Text>Ditolak</Text>
    </View>
  )
}
function DaftarPenerima () {
  return (
    <View>
      <Text>List Penerima</Text>
    </View>
  )
}

function KelolaAntrianPage() {
  const insets = useSafeAreaInsets();
  return (
    
    <Tab.Navigator
      initialRouteName="LayananTerdaftar"
      screenOptions={({route}) => ({
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          backgroundColor: hijau,
          height: 100,
          justifyContent: 'flex-end',
        },
        style: {backgroundColor: 'red', marginTop: insets.top},
      })}>
      <Tab.Screen
        name="LayananTerdaftar"
        component={KelTerdaftar}
        options={{
          tabBarLabel: 'Terdaftar',
          title: 'Terdaftar',
        }}
      />
      <Tab.Screen
        name="LayananDiproses"
        component={KelDiproses}
        options={{
          tabBarLabel: 'Proses',
          title: 'Proses',
        }}
      />
      <Tab.Screen
        name="KelDitolak"
        component={KelDitolak}
        options={{
          tabBarLabel: 'Ditolak',
          title: 'Ditolak',
        }}
      />
      <Tab.Screen
        name="DaftarPenerima"
        component={DaftarPenerima}
        options={{
          tabBarLabel: 'Penerima',
          title: 'Penerima',
        }}
      />
    </Tab.Navigator>
  );
}
export default KelolaAntrianPage;

const styleHalAntrian = StyleSheet.create({
  styleTextAtas: {
    borderLeftWidth: 3,
    borderLeftColor: hijau,
    // justifyContent: '',
    paddingLeft: 10,
  },

  styleContainerText: {flexDirection: 'row', justifyContent: 'space-around'},
  spaceTiap: {marginTop: 10},
});
