import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stylesDariGaya} from '../Components//Gayaaja';
import MaterialIcon from 'react-native-vector-icons';
import {fotoUrl} from '../../Assets/Url';
import {pickSingle, isCancel} from 'react-native-document-picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import axios from 'axios';
import {ipAdress} from './Components/Url';

const EditDataUserUmum = ({navigation, route}) => {
  // terima data
  // navigation.navigate('EditDataUserUmum', {dataUser: alldata});
  const {
    userName,
    idUmum,
    password,
    tanggallahir,
    nik,
    nokk,
    nomortelepon,
    jeniskelamin,
    nama,
    email,
    fotoProfile,
  } = route.params;
  // console.log(dataUser, "ambil all data");
  const [usernameState, setUsernameState] = useState(userName);
  const [passwordState, setPasswordState] = useState(password);
  const [jenisKelaminState, setJenisKelaminState] = useState(jeniskelamin);
  const [namaState, setNamaState] = useState(nama);
  const [tglLahirState, setTglLahirState] = useState(tanggallahir);
  const [emailState, setEmailState] = useState(email);
  const [nomorTelpState, setnomorTelpState] = useState(nomortelepon);
  const [NIKState, setNIKState] = useState(nik);
  const [noKKState, setnoKKState] = useState(nokk);
  const [fotoProfileState, setFotoProfileState] = useState(fotoProfile);
  //   // *kirim data ke API
  async function EditDataUser() {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          IdUmum: idUmum,
        },
        url: `${ipAdress}/aplikasiLayananAkta/editDataUserUmum.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      console.log(res.data);
      alert('Akun Berhasil Didaftarkan');
    } catch (error) {
      alert('Gagal Membuat akun');
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
      <View
        style={[
          {
            justifyContent: 'center',
            backgroundColor: hijau,
            height: 130,
            borderBottomEndRadius: 20,
          },
        ]}>
        <TouchableOpacity
          onPress={
            // postRegisterUser();
            navigation.goBack()
          }
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}>
          <MaterialIcon
            style={{marginTop: 3, marginHorizontal: 22}}
            size={18}
            color={putih}
            name="arrow-back-ios"
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              letterSpacing: 2,
              fontWeight: 'bold',
            }}>
            Edit Akun
          </Text>
        </TouchableOpacity>
      </View>
      {/* Form */}
      <ScrollView style={[StyleForm.container]}>
        {/* Username */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>Username</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setUsernameState(text)}
                value={usernameState}
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
                onChangeText={text => setPasswordState(text)}
                value={passwordState}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>
        {/* nama */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>Nama</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setNamaState(text)}
                value={namaState}
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
                onChangeText={text => setNIKState(text)}
                value={NIKState}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>
        {/* No. KK */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>No. KK</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setnoKKState(text)}
                value={noKKState}
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
                onChangeText={text => setnomorTelpState(text)}
                value={nomorTelpState}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>
        {/* Jenis Kelamin */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={{marginLeft: 30}}>
            <Text>Jenis Kelamin</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={hijau} />
            <View style={[{flex: 1}]}>
              <TextInput
                onChangeText={text => setJenisKelaminState(text)}
                value={jenisKelaminState}
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
                onChangeText={text => setEmailState(text)}
                value={emailState}
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
              await EditDataUser();
            } catch (error) {}
          }}>
          <View
            style={[
              stylesDariGaya.Tombols,
              {alignSelf: 'center', alignItems: 'center', marginBottom: 50},
            ]}>
            <Text style={{color: putih}}>Simpan</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditDataUserUmum;

const StyleForm = StyleSheet.create({
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
