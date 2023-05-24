import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwsome from 'react-native-vector-icons/FontAwesome5';
import {stylesDariGaya} from './ImportedStyles';
import {useNavigation} from '@react-navigation/native';
import {
  hijau,
  pinkGelap,
  putih,
  ungu,
} from '../../Assets/StylingComponent/Coloring';

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
      
          {
            borderColor: hijau,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: putih,
          },
        ]}>
        <FontAwsome name="book-open" size={30} style={{color: hijau}} />
        <Text style={{}}>Syarat</Text>
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
        <MaterialIcon name="human-queue" size={40} style={{color: hijau}} />
        <Text style={{}}>Antrian Layanan</Text>
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
        <MaterialIcon name="playlist-add" size={40} style={{color: hijau}} />
        <Text style={{}}>Daftar Layanan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuUmum;
