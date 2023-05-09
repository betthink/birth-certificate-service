import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {stylesDariGaya} from './Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {fotoUrl} from '../Assets/Url';
import {pickSingle, isCancel} from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {hijau, putih, putihGelap} from '../Assets/StylingComponent/Coloring';
import axios from 'axios';
import {ipAdress} from './Components/Url';
import ButtonBack from './Components/ButtonBack';

const RegisterAkunScreen = ({navigation}) => {
  const [Password, setPassword] = useState('');
  const [Nama, setNama] = useState('');
  const [Email, setEmail] = useState('');
  const [NomorTelp, setNomorTelp] = useState('');
  const [NIK, setNIK] = useState('');
  const [FotoProfile, setFotoProfile] = useState('');
  // *kirim data ke API
  async function RegistrasiAkun() {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          Password,
          Nama,
          Email,
          NomorTelp,
          NIK,
          FotoProfile: 'test.jpg',
        },
        url: `${ipAdress}/aplikasiLayananAkta/addData/registrasiUserUmum.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      console.log(Nama, Password, NIK, Email, NomorTelp);
      const {value, message} = res.data;
      // console.log(res.data);
      if (value == 1) {
        alert('Akun Berhasil Didaftarkan');
        navigation.navigate('Login');
      } else {
        alert(message);
      }
      // switch (value) {
      //   case '1':
      //     alert('Akun Berhasil Didaftarkan');
      //     navigation.navigate('Login');
      //     break;
      //   case '3':
      //     alert('Nik sudah digunakan');
      //     break;
      //   case '2':
      //     alert(message);
      //     break;
      //   case '0':
      //     alert(message);
      // }
    } catch (error) {
      alert('koneksi sedang tidak bagus, sihlakan coba lagi?');
      console.log(error);
    }
    // console.log(res.data['message']);
  }
  const sizeIcon = 30;
  // * add file
  async function openDocument() {
    try {
      // console.log(test.pickSingle());
      const doc = await pickSingle();
      // console.log(doc);
    } catch (err) {
      console.log(err);
      if (isCancel(err)) {
        console.log('canceled', err);
      } else {
        console.log(err);
      }
    }
  }

  return (
    <View style={{backgroundColor: putih, flex: 1}}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
      <ButtonBack buttontext="BuatAKun" />
      </View>
      {/* Form */}
      <ScrollView style={[StyleForm.container]}>
        {/* Username */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>Nama</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setNama(text)}
                value={Nama}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>
        {/* Password */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>Password</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setPassword(text)}
                value={Password}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>

        {/* NIK */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>NIK</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setNIK(text)}
                value={NIK}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>

        {/* No. Telp */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>No. Telp</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setNomorTelp(text)}
                value={NomorTelp}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>

        {/* Email */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>Email</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setEmail(text)}
                value={Email}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>
        {/* image profile */}
        <TouchableOpacity
          style={{
            backgroundColor: putihGelap,
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth: 4,
            borderColor: '#fff',
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            openDocument();
            // console.log("hgh");
          }}>
          <Image
            size={50}
            source={{
              uri: fotoUrl,
            }}
          />
          <MaterialIcon
            style={{position: 'absolute', top: 5, right: 0}}
            name="add-circle"
            size={20}
            color={'#24CE9E'}
          />
        </TouchableOpacity>
        {/* Button Buat Akun */}
        <TouchableOpacity
          style={[{marginTop: 30}]}
          onPress={async () => {
            try {
              await RegistrasiAkun();
            } catch (error) {}
          }}>
          <View
            style={[
              stylesDariGaya.Tombols,
              {alignSelf: 'center', alignItems: 'center', marginBottom: 50},
            ]}>
            <Text style={{color: putih}}>Daftar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RegisterAkunScreen;

export const StyleForm = StyleSheet.create({
  container: {paddingHorizontal: 22, flex: 1},
  containerForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
  },
  spaceBeetwenForm: {
    marginTop: 18,
  },
});
