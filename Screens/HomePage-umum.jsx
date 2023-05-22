import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderCloud from './Components/HeaderCloud';
import HeaderBox from './Components/HeaderBox';
import {stylesDariGaya} from './Components/ImportedStyles';
import Album from '../Assets/Images/album.png';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import bgCloud from '../Assets/Images/bg.png';
import MenuUmum from './Components/MenuUmum';
import PersonPng from './Components/PersonPng';
import {fotoUrl} from '../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hijau, hitam, putihGelap } from '../Assets/StylingComponent/Coloring';

const HomeUmum = ({navigation}) => {
  const [Id, setId] = useState('');
  const [Nama, setNama] = useState('');
  const [NIK, setNIK] = useState('');
  const [NomorTelp, setNomorTelp] = useState('');
  const [Password, setPassword] = useState('');
  const [StatusLayanan, setStatusLayanan] = useState('');
  const [Email, setEmail] = useState('');
  const [FotoProfile, setFotoProfile] = useState('');
  const [Pemberitahuan, setPemberitahuan] = useState('');
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
            FotoProfile,
          } = JSON.parse(value);
          setId(Id);
          setNama(Nama);
          setNIK(NIK);
          setNomorTelp(NomorTelp);
          setPassword(Password);
          setEmail(Email);
          setStatusLayanan(StatusLayanan);
          setFotoProfile(FotoProfile);
        }
      });
    } catch (error) {
      console.log('Error retrieving data', error);
    }
  };

  useEffect(() => {
    ambilCookie();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <ImageBackground
      resizeMode="stretch"
      style={{width: '100%', height: '100%'}}> */}
      <View style={stylesDariGaya.headerBox}>
        {/* wrapp all content di box */}
        <View style={{paddingHorizontal: 22, paddingTop: 30, flex: 1}}>
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
              style={{padding: 2, backgroundColor: '#fff', borderRadius: 30, borderWidth: 2, borderColor: putihGelap}}>
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
                  })
                }>
                <Image
                  style={[stylesDariGaya.fotoProfile]}
                  // source={require('../../Assets/Images/album.png')}
                  source={{
                    uri: FotoProfile,
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
            backgroundColor: 'grey',
            alignSelf: 'flex-end',
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('PemberitahuanScreen')}>
            <MaterialIcon name="notifications" color={'#fff'} size={20} />
            <Text style={{color: '#fff'}}>Pemberiathuan</Text>
          </TouchableOpacity>
        </View>
        <View style={[{flex: 2}]}>
          {/* Person png */}
          <PersonPng />

          <MenuUmum />
          {/* button Buat antrian */}
          <View
            style={[
              stylesDariGaya.Tombols,
              {alignSelf: 'center', marginTop: 30},
            ]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DataBayiScreenUmum', {Id})}
              style={[stylesDariGaya.contentCenter]}>
              <Text style={[stylesDariGaya.textColorWhite]}>
                Daftar Layanan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default HomeUmum;
