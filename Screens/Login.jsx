import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput, } from 'react-native-gesture-handler';
import HeaderCloud from './Components/HeaderCloud';
import MeterialIcon from 'react-native-vector-icons/MaterialIcons';
import {stylesDariGaya} from './Components/ImportedStyles';
import {hijau, putih, ungu} from '../Assets/StylingComponent/Coloring';
// import { AuthContext } from './Components/AuthContext';
import axios from 'axios';
import {ipAdress} from './Components/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GreenButton from './Components/GreenButton';
const Login = ({navigation, route}) => {
  const [NamaHook, setNamaHook] = useState('');
  const [PasswordHook, setPasswordHook] = useState('');
  async function loginFunc() {
    if (!NamaHook) {
      alert('masukan username anda!');
      return;
    } else if (!PasswordHook) {
      alert('masukan password anda!');
      return;
    }
    try {
      console.log(NamaHook);
      console.log(PasswordHook);
      const res = await axios({
        method: 'POST',
        data: {
          Nama: NamaHook,
          Password: PasswordHook,
        },
        url: `${ipAdress}/aplikasiLayananAkta/Login.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      const {value, Level} = res.data;
      console.log(res.data);
      console.log(value, "ini value");
      if (value == 1) {
        AsyncStorage.setItem('userData', JSON.stringify(res.data));

        if (Level == 'Umum') {
          navigation.navigate('HomeUmum');
        } else if (Level == 'Admin') {
          navigation.navigate('AdminPageNavigation');
        }
      } else {
        alert('Nama atau Password salah');
      }
    } catch (error) {
      alert('Gagal Login');
      console.log("loh kok",error);
    }
  }
  return (
    <View style={{backgroundColor: putih, flex: 1}}>
      <HeaderCloud />
      {/* wrapSemuaContent */}
      <View
        style={[
          // stylesDariGaya.paddingDef,
          {justifyContent: 'center', alignItems: 'center', flex: 1, paddingHorizontal: 20},
        ]}>
        {/* Login Umum Text */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={[stylesDariGaya.TextBold, {letterSpacing: 2}]}>
            Login
          </Text>
        </View>
        {/* Form Login */}
        <View style={[{flex: 1, width: '90%'}]}>
          <View style={[{marginTop: 20}]}>
            <TextInput
              style={[stylesDariGaya.formInput]}
              onChangeText={text => setNamaHook(text)}
              value={NamaHook}
              placeholder="Nama"
            />
          </View>
          <View style={[{marginTop: 20}]}>
            <TextInput
              style={[stylesDariGaya.formInput]}
              onChangeText={text => setPasswordHook(text)}
              value={PasswordHook}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
          <TouchableOpacity
            style={[
              stylesDariGaya.Tombols,
              {
                marginTop: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              },
            ]}
            onPress={async () => {
              try {
                await loginFunc();
              } catch (error) {}
            }}>
            <Text style={[{color: putih}]}>Login</Text>
          </TouchableOpacity>
         
        {/* tombol login admin dan Buat AKun */}
        <View
          style={{
            
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 50,
            // width: 350,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterAkunScreen')}>
            <Text style={{color: hijau, textDecorationLine: 'underline'}}>
              Buat Akun?
            </Text>
          </TouchableOpacity>
        </View>
        </View>

      </View>
    </View>
  );
};

export default Login;
