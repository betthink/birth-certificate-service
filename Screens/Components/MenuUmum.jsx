import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {stylesDariGaya} from './Gayaaja';
import {useNavigation} from '@react-navigation/native';
import { hijau, pinkGelap, putih, ungu } from '../../Assets/StylingComponent/Coloring';

const MenuUmum = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: pinkGelap
        // borderWidth: 2,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SyaratScreen')}
        style={[
          stylesDariGaya.menu,
          {
            borderColor: hijau,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: putih,
          },
        ]}>
        <Text style={{}}>Syarat</Text>
        <MaterialIcon name="info" size={30} style={{color: hijau}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AntrianLayananScreen')}
        style={[
          stylesDariGaya.menu,
          {
            borderColor: hijau,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: putih,
          },
        ]}>
        <Text style={{}}>Antrian Layanan</Text>
        <MaterialIcon name="person" size={30} style={{color: hijau}} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuUmum;
