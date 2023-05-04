import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {stylesDariGaya} from '../Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {pickSingle, isCancel} from 'react-native-document-picker';
import {fotoUrl} from '../../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
import {
  hijau,
  hitam,
  putih,
  putihGelap,
  toska,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
// import {ipAdress} from '../Components/Url';

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

const ProfileAdminScreen = ({navigation, route}) => {
  const [password, setpassword] = useState('');
  const [nik, setnik] = useState('');
  const [Id, setId] = useState('');
  const [StatusLayanan, setStatusLayanan] = useState('');
  const [nomortelepon, setnomortelepon] = useState('');
  const [nama, setnama] = useState('');
  const [email, setemail] = useState('');
  const [fotoProfile, setfotoProfile] = useState('');
  
  const ambilCookie = () => {
    AsyncStorage.getItem('userData').then(value => {
      AsyncStorage.getItem('userData');
      const {
        Id,
        Nama,
        Password,
        Email,
        NomorTelp,
        FotoProfile,
        StatusLayanan,
        NIK,
      } = JSON.parse(value);
      setId(Id);
      setnama(Nama);
      setpassword(Password);
      setStatusLayanan(StatusLayanan);
      setnik(NIK);
      setemail(Email);
      setnomortelepon(NomorTelp);
      setfotoProfile(FotoProfile);
    });
  };
  useEffect(() => {
    ambilCookie();
  }, []);

  useEffect(() => {
    // tampilkanDataUser();
  }, []);

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
                source={{uri : fotoProfile }}
                // source={{
                //   uri: fotoUrl,
                // }}
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
              <Text style={[stylesDariGaya.TextBold]}>{nama}</Text>
              <Text style={[stylesDariGaya.textDataStyle]}>Id: {Id}</Text>
            </View>
          </View>
        </View>
        {/* Data pribadi  */}
        <ScrollView style={{marginTop: 20}}>
          <View style={[stylesDariGaya.listData]}>
            <Text>Password</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{password}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Nama</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nama}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>NIK</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nik}</Text>
          </View>

          <View style={[stylesDariGaya.listData]}>
            <Text>No. Telp</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{nomortelepon}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Jenis Kelamin</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{email}</Text>
          </View>
          <View style={[stylesDariGaya.listData]}>
            <Text>Email</Text>
            <Text style={[stylesDariGaya.textDataStyle]}>{StatusLayanan}</Text>
          </View>
        </ScrollView>
        {/* *buttons */}
        <View
          style={[
            {
              marginVertical: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            },
          ]}>
          {/* buttons Edit */}
          <TouchableOpacity
            // onPress={getApi}
            onPress={async () => {
              try {
                await tampilkanDataById();
              } catch (error) {}
            }}
            style={[styleButtons.buttons, {backgroundColor: hijau}]}>
            <MaterialIcon name="edit" color={putih} />
            <Text style={[{color: putih}]}>Edit Akun</Text>
          </TouchableOpacity>
          {/* buttons Hapus */}
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();
              navigation.replace('Login');
            }}
            style={[styleButtons.buttons, {backgroundColor: '#454545'}]}>
            <MaterialIcon name="logout" color={putih} />
            <Text style={[{color: putih}]}>Log Out</Text>
          </TouchableOpacity>
          {/* buttons Hapus */}
          <TouchableOpacity
            style={[styleButtons.buttons, {backgroundColor: ungu}]}>
            <MaterialIcon name="delete" color={putih} />
            <Text style={[{color: putih}]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileAdminScreen;

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
