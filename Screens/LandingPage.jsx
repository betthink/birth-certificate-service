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
import {stylesDariGaya} from './Components/Gayaaja';
import Orang from '../Assets/Images/cardPerson.png';
import { hijau, putih } from '../Assets/StylingComponent/Coloring';

const LandingPage = ({navigation}) => {
  return (
    <View style={{backgroundColor: putih, flex: 1}}>
      <HeaderCloud />
      {/* wrapSemua content dibawah */}
      <View style={{paddingHorizontal: 22, alignItems: 'center'}}>
        {/* wrapp Text Banner */}
        <View
          style={{
            width: 340,
            borderWidth: 2,
            borderColor: hijau,
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
          <Image source={Orang} resizeMode="contain"></Image>
        </View>
        {/* Tombols */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={stylesDariGaya.Tombols}>
          <Text style={[stylesDariGaya.textCenter, {color: putih}]}>
            Masuk Tanpa login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginU')}
          style={[stylesDariGaya.Tombols, {marginTop: 14}]}>
          <Text style={[stylesDariGaya.textCenter, {color: putih}]}>
            Login
          </Text>
        </TouchableOpacity>
     
      </View>
    </View>
  );
};

export default LandingPage;
