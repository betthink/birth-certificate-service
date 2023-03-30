import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import HeaderCloud from './Components/HeaderCloud';
import MeterialIcon from 'react-native-vector-icons/MaterialIcons';
import {stylesDariGaya} from './Components/Gayaaja';
import {hijau, putih} from '../Assets/StylingComponent/Coloring';
// import { AuthContext } from './Components/AuthContext';
import axios from 'axios';
import {ipAdress} from './Components/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginU = ({navigation}) => {
  const [UsernameHook, setUsernameHook] = useState('');
  const [PasswordHook, setPasswordHook] = useState('');
  // const [isLoading, setisLoading] = useState(false);
  // const [userInfo, setuserInfo] = useState({});
  // const [dataUser, setDataUser] = useState({
  //   Username: Username,
  //   Password: Password
  // })

  // * test
  // const urlLogin = `${ipAdress}/aplikasiLayananAkta/LoginUmum.php`;
  async function loginFunc() {
    if (!UsernameHook) {
      alert('masukan username anda!');
      return;
    } else if (!PasswordHook) {
      alert('masukan password anda!');
      return;
    }
    try {
      // console.log(UsernameHook, PasswordHook);
      const res = await axios({
        method: 'POST',
        data: {
          Username: UsernameHook,
          Password: PasswordHook,
        },
        url: `${ipAdress}/aplikasiLayananAkta/LoginUmum.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value, IdUmum} = res.data;
      if (value == 1) {
        alert('Berhasil Login');
        // navigation.navigate("HomeUmum", {idUser: IdUmum})
        // * sesion using asynStorage
        AsyncStorage.setItem('userName', UsernameHook);
        AsyncStorage.setItem('idUser', IdUmum);
        navigation.navigate('HomeUmum', {idUser: IdUmum});
        // console.log("ini adalah Id:",res.data.IdUmum);
      } else {
        alert('login Gagal!!!');
      }

      // navigation.navigate('AdminPageNavigation')
    } catch (error) {
      alert('Gagal Login');
      console.log(error);
    }

    // console.log(res.data['message']);
  }
  // const getApiLogin = () => {
  //   const dataForApi = {
  //     Username: Username,
  //     Password: Password
  //   }
  //   axios
  //     .post(`${urlLogin}`, dataForApi)
  //     .then( result =>{setDataUser(result.data), console.log(result.data)})
  //     .catch(error => console.log('err:', error));
  // };

  return (
    <ScrollView style={{backgroundColor: putih}}>
      <HeaderCloud />
      {/* wrapSemuaContent */}
      <View style={stylesDariGaya.paddingDef}>
        {/* button Kembali */}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: -20,
          }}>
          <MeterialIcon
            style={{marginTop: 6}}
            color={hijau}
            name="arrow-back-ios"
          />

          <Text
            style={[
              stylesDariGaya.textDef,
              stylesDariGaya.TextMediumBold,
              {color: hijau},
            ]}>
            Kembali
          </Text>
        </TouchableOpacity>

        {/* Login Umum Text */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={[stylesDariGaya.TextBold, {letterSpacing: 2}]}>
            Login Umum
          </Text>
        </View>
        {/* Form Login */}

        <View>
          <View style={[{marginTop: 20}]}>
            <TextInput
              style={[stylesDariGaya.formInput]}
              onChangeText={text => setUsernameHook(text)}
              value={UsernameHook}
              placeholder="Username"
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
                marginTop: 20,
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
            <Text style={[{color: putih}]}>Loginn</Text>
          </TouchableOpacity>
        </View>

        {/* tombol login admin dan Buat AKun */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginAdmin')}>
            <Text>Login Sebagai Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FormBuatAkunScreen')}>
            <Text style={{color: hijau, textDecorationLine: 'underline'}}>
              Buat Akun?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginU;
