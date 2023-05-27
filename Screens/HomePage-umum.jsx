import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderCloud from './Components/HeaderCloud';
import HeaderBox from './Components/HeaderBox';
import {stylesDariGaya} from './Components/ImportedStyles';
import Album from '../Assets/Images/album.png';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import bgCloud from '../Assets/Images/bg.png';
import MenuUmum from './Components/MenuUmum';
import PersonPng from './Components/PersonPng';
import {fotoUrl} from '../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  hijau,
  hitam,
  pinkGelap,
  putih,
  putihGelap,
  ungu,
} from '../Assets/StylingComponent/Coloring';
// import {SvgXml} from 'react-native-svg';
// import svgConent from '../Assets/Svg/content.svg'
import pngHeader from '../Assets/Images/mailSent.png';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';
import FontAwsome from 'react-native-vector-icons/FontAwesome5';
import { ipAdress } from './Components/Url';

const HomeUmum = ({navigation}) => {
  const [Id, setId] = useState('');
  const [Nama, setNama] = useState('');
  const [NIK, setNIK] = useState('');
  const [NomorTelp, setNomorTelp] = useState('');
  const [Password, setPassword] = useState('');
  const [StatusLayanan, setStatusLayanan] = useState('');
  const [Email, setEmail] = useState('');
  const [FotoProfile, setFotoProfile] = useState('');
  const [Level, setLevel] = useState('');

  const ambilCookie = () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        AsyncStorage.getItem('userData');

        if (value !== null) {
          const {
            Id,
            Nama,
            NIK,
            NomorTelp,
            Password,
            StatusLayanan,
            Email,
            FotoProfile,Level
          } = JSON.parse(value);
          setId(Id);
          setNama(Nama);
          setNIK(NIK);
          setNomorTelp(NomorTelp);
          setPassword(Password);
          setEmail(Email);
          setStatusLayanan(StatusLayanan);
          setFotoProfile(FotoProfile);
          setLevel(Level)
        }
      });
    } catch (error) {
      console.log('Error retrieving data', error);
    }
  };

  
  useEffect(() => {
    ambilCookie();
    // getDataUser();
   
  }, []);
  // u
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      <View
        style={[
          {
            height: 100,
            paddingHorizontal: 22,
            borderBottomWidth: 1,
            borderColor: 'grey',
          },
        ]}>
        {/* wrapp all content di box */}
        <View style={{paddingTop: 30, flex: 1, elevation: 2}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {/* wrap Text Header */}
            <View style={[{flex: 1}]}>
              <View>
                <Text
                  style={[
                    stylesDariGaya.TextBold,
                    {color: hijau, fontSize: 20, letterSpacing: 3},
                  ]}>
                  Selamat Datang
                </Text>
              </View>
              {/* <View style={{width: 300}}>
                <Text style={{color: hitam}}>
                  Gunakan Layanan Kami dengan Bijak dan beratnggung jawab !
                </Text>
              </View> */}
            </View>
            {/* wrap Foto Profile */}

            <View
              style={{
                // padding: 2,
                backgroundColor: '#fff',
                borderRadius: 30,
                borderWidth: 2,
                borderColor: putihGelap,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProfileUmumScreen', {
                    Id,
                    Nama,
                    NIK,
                    NomorTelp,
                    Password,
                    StatusLayanan,
                    Email,
                    FotoProfile,
                    Level
                  })
                }>
                <Image
                  style={[
                    // stylesDariGaya.fotoProfile,
                    {width: 50, height: 50, borderRadius: 40},
                  ]}
                  // source={require('../../Assets/Images/album.png')}
                  source={{
                    uri: `${ipAdress}/aplikasiLayananAkta/uploads/FotoProfile/${NIK}/${FotoProfile}`,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* wrap content in below box */}
      <View style={{paddingHorizontal: 22, flex: 1}}>
        {/* pemberitahuan */}
        <View
          style={{
            marginTop: 10,
            height: 30,
            backgroundColor: '#92E3A9',
            alignSelf: 'flex-end',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('PemberitahuanScreen' ,{Id})}>
            <MaterialIcon name="bell" color={putihGelap} size={20} />
            <Text style={{color: '#fff'}}>Pemberiathuan</Text>
          </TouchableOpacity>
        </View>
        <View style={[{flex: 1}]}>
          {/* png */}
          <Image
            style={{flex: 1, alignSelf: 'center'}}
            source={pngHeader}
            resizeMode="center"
          />
          {/* Menu  */}
          <View
            style={{
              // flex: .5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: pinkGelap,
              // borderWidth: 2,
              marginBottom: 20,
            }}>
            {/* Syarat */}
            <TouchableOpacity
              onPress={() => navigation.navigate('SyaratScreen')}
              style={[styles.styleMenu]}>
              <FontAwsome name="book-open" size={30} style={{color: hijau}} />
              <Text style={{}}>Syarat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AntrianLayananScreen')}
              style={[styles.styleMenu]}>
              <MaterialIcon
                name="human-queue"
                size={40}
                style={{color: hijau}}
              />
              <Text style={{textAlign: 'center'}}>Antrian</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DataBayiScreenUmum', {Id})}
              style={[styles.styleMenu]}>
              <Material
                name="post-add"
                size={40}
                style={{color: hijau}}
              />
              <Text style={{textAlign: 'center'}}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeUmum;

export const styles = StyleSheet.create({
  styleMenu: {
    backgroundColor: putihGelap,
    borderRadius: 50,
    flex: 1,
    width: 100,
    elevation: 2,
    padding: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
