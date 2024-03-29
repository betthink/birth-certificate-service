import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';
import HeaderCloud from './Components/HeaderCloud';
import {stylesDariGaya} from './Components/ImportedStyles';
import Orang from '../Assets/Images/landingpage.png';
import { hijau, putih, ungu } from '../Assets/StylingComponent/Coloring';

const LandingPage = ({navigation}) => {
  return (
    <View style={{backgroundColor: putih, flex: 1}}>
      {/* <HeaderCloud /> */}
      {/* wrapSemua content dibawah */}
      <View style={{paddingHorizontal: 22, alignItems: 'center', marginTop:50}}>
        {/* wrapp Text Banner */}
        <View
          style={{
            width: 340,
            borderWidth: 2,
            borderColor: ungu,
            padding: 20,
          }}>
          <Text style={[stylesDariGaya.textCenter, stylesDariGaya.TextBold]}>
            Selamat datang
          </Text>
          <Text
            style={[
              stylesDariGaya.TextMediumBold,
              stylesDariGaya.textCenter,
              {lineHeight: 24, marginTop: 20},
            ]}>
            di Layanan Permohonan Akta Kelahiran Online DISDUKCAPIL Kota
            Palangka Raya
          </Text>
        </View>
        {/* gambar orang */}
        <View style={{marginTop: 14}}>
          <Image style={[{width: 300, height: 300}]} source={Orang} resizeMode="contain"/>
        </View>
        {/* Tombols */}
    
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={[stylesDariGaya.Tombols, {marginTop: 14}]}>
          <Text style={[stylesDariGaya.textCenter, {color: putih}]}>
            Masuk
          </Text>
        </TouchableOpacity>
     
      </View>
    </View>
  );
};

export default LandingPage;
