import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {stylesDariGaya} from './Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {pickSingle, isCancel} from 'react-native-document-picker';
import {fotoUrl} from '../Assets/Url';
import axios from 'axios';
import {
  hijau,
  hitam,
  putih,
  putihGelap,
  toska,
  ungu,
} from '../Assets/StylingComponent/Coloring';
import {ipAdress} from './Components/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add file
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

const ProfileUmumScreen = ({navigation, route}) => {
  // document picker function
  // * ini adalah Id
  const {
    Id,
    Nama,
    NIK,
    NomorTelp,
    Password,
    StatusLayanan,
    Email,
    FotoProfile,
  } = route.params;
  useEffect(() => {
    // tampilkanDataById();
  }, []);

  // * Fungsi hapus akun user umum by id
  async function deleteDataById() {
    try {
      // setIdUmum({Id});

      const res = await axios({
        method: 'POST',
        data: {
          Id,
        },
        url: `${ipAdress}/aplikasiLayananAkta/deleteAkun.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });

      const {value} = res.data;
      // console.log(value,"ini value")
      if (value == 1) {
        alert('Berhasil dihapus');
        navigation.goBack();

        // console.log("ini adalah Id:",res.data.IdUmum);
      } else {
        alert(' Gagal hapus akun');
      }

      // navigation.navigate('AdminPageNavigation')
    } catch (error) {
      alert('Gagal h data');
      console.log(error);
    }

    // console.log(res.data['message']);
  }
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      {/* foto profile container */}
      <View style={{marginHorizontal: 22, flex: 1}}>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <MaterialIcon color={hitam} size={16} name="arrow-back-ios" />
            <Text style={[stylesDariGaya.textDef, {color: hitam}]}>
              Kembali
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View
            style={{
              backgroundColor: putih,
              marginTop: 30,
              paddingVertical: 10,
              borderBottomWidth: 3,
              borderBottomColor: ungu,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              height: 130,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* image profile */}
            <TouchableOpacity
              style={{
                backgroundColor: ungu,

                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 4,
                borderColor: '#fff',
                borderRadius: 50,
                position: 'absolute',
                top: -30,
              }}
              onPress={() => {
                openDocument();
              }}>
              <Image
                style={[{width: 80, height: 80, borderRadius: 45}]}
                source={{uri: FotoProfile}}
              />
              <MaterialIcon
                style={{position: 'absolute', top: 5, right: 0}}
                name="add-circle"
                size={20}
                color={'#24CE9E'}
              />
            </TouchableOpacity>
            <View
              style={{position: 'absolute', bottom: 5, alignItems: 'center'}}>
              <Text style={[stylesDariGaya.TextBold]}>{Nama}</Text>
              <Text style={[stylesDariGaya.textDataStyle]}>Id: {Id}</Text>
            </View>
          </View>
        </View>
        {/* Data pribadi  */}
        <ScrollView style={{marginTop: 20}}>
          <View style={[stylesDariGaya.listData]}>
            <Text>Password</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{Password}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Nama</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{Nama}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>NIK</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{NIK}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>No. KK</Text>
            <Text style={[stylesDariGaya.textDataStyle]}></Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>No. Telp</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{NomorTelp}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Jenis Kelamin</Text>
            <Text style={[stylesDariGaya.textDataStyle]}></Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Email</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{Email}</Text>
          </View>
        </ScrollView>
        {/* *buttons */}
        <View
          style={[
            {
              marginVertical: 20,
              justifyContent: 'center',
              flexDirection: 'row',
            },
          ]}>
          {/* buttons Edit */}

          {/* buttons Log out */}
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();
              navigation.replace('Login');
            }}
            style={[styleButtons.buttons, {backgroundColor: '#454545'}]}>
            <MaterialIcon name="logout" color={putih} />
            <Text style={[{color: putih}]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileUmumScreen;

const styleButtons = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    padding: 10,

    width: 115,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
