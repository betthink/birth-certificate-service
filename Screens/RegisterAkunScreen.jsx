import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {stylesDariGaya} from './Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fotoUrl} from '../Assets/Url';
// import {pickSingle, isCancel} from 'react-native-document-picker';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {
  hijau,
  putih,
  putihGelap,
  ungu,
} from '../Assets/StylingComponent/Coloring';
import axios from 'axios';
import {ipAdress} from './Components/Url';
import ButtonBack from './Components/ButtonBack';
import GreenButton from './Components/GreenButton';
import {Feather, IonIcon} from './Components/Icons';

const RegisterAkunScreen = ({navigation}) => {
  const [Password, setPassword] = useState(null);
  const [Nama, setNama] = useState(null);
  const [Email, setEmail] = useState(null);
  const [NomorTelp, setNomorTelp] = useState(null);
  const [NIK, setNIK] = useState(null);
  const [FotoProfile, setFotoProfile] = useState(null);
  const [UriFoto, setUriFoto] = useState(null);
  // *kirim data ke API
  const pickDocument = async setData => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setData(result);
      setUriFoto(result.uri);
      // console.log(result.name, 'ini nama dari result');
    } catch (error) {
      console.log(error);
    }
  };
  async function RegistrasiAkun() {
    try {
      const formData = new FormData();

      formData.append('Password', Password);
      formData.append('Nama', Nama);
      formData.append('Email', Email);
      formData.append('NIK', NIK);
      formData.append('NomorTelp', NomorTelp);
      formData.append('FotoProfile', FotoProfile);
      const res = await axios.post(
        `${ipAdress}/aplikasiLayananAkta/addData/registrasiUserUmum.php`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log(Nama, Password, NIK, Email, NomorTelp, FotoProfile);
      const {value, message} = res.data;
      console.log(res.data);
      console.log(message, 'Ini massagee');
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
  // async function openDocument() {
  //   try {
  //     // console.log(test.pickSingle());
  //     const doc = await pickSingle();
  //     // console.log(doc);
  //   } catch (err) {
  //     console.log(err);
  //     if (isCancel(err)) {
  //       console.log('canceled', err);
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // }

  return (
    <View style={{backgroundColor: putih, flex: 1}}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext="BuatAKun" />
      </View>
      {/* Form */}
      <ScrollView style={[{paddingHorizontal: 20}]}>
        {/* Username */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={[StyleForm.mgLef]}>
            <Text>Nama</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <MaterialIcon name="person" size={sizeIcon} color={ungu} />
            <View style={[StyleForm.pdLef]}>
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
          <View style={[StyleForm.mgLef]}>
            <Text>Password</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <AntDesign name="barcode" size={20} color={ungu} />
            <View style={[StyleForm.pdLef, {marginLeft: 10}]}>
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
          <View style={[StyleForm.mgLef]}>
            <Text>NIK</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <Feather name="hash" size={sizeIcon} color={ungu} />
            <View style={[StyleForm.pdLef]}>
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
          <View style={[StyleForm.mgLef]}>
            <Text>No. Telp</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <Feather name="phone" size={sizeIcon} color={ungu} />
            <View style={[StyleForm.pdLef]}>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => setNomorTelp(text)}
                value={NomorTelp}
                style={[stylesDariGaya.formInput, StyleForm.textInput]}
              />
            </View>
          </View>
        </View>

        {/* Email */}
        <View style={[StyleForm.spaceBeetwenForm]}>
          <View style={[StyleForm.mgLef]}>
            <Text>Email</Text>
          </View>
          <View style={[StyleForm.containerForm]}>
            <IonIcon name="mail-open" size={sizeIcon} color={ungu} />
            <View style={[StyleForm.pdLef]}>
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
            borderWidth: 2,
            borderColor: ungu,
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            pickDocument(setFotoProfile);
            // console.log("hgh");
          }}>
          {/* {UriFoto == null ? (
            <View style={[{width: 50, height: 50}]} />
          ) : (
            <Image size={50} source={require(`${UriFoto}`)} />
          )} */}
 
          <MaterialIcon
            style={{position: 'absolute', top: 5, right: 0}}
            name="add-circle"
            size={20}
            color={ungu}
          />
        </TouchableOpacity>
        {/* Button Buat Akun */}
        <GreenButton
          width={'100%'}
          ButtonText={'Daftar'}
          actionOnclick={async () => {
            try {
              await RegistrasiAkun();
            } catch (error) {}
          }}
        />
      </ScrollView>
    </View>
  );
};

export default RegisterAkunScreen;

export const StyleForm = StyleSheet.create({
  container: {paddingHorizontal: 22, flex: 1},
  containerForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flex:1
  },
  textInput: {
    height: 40,
  },
  spaceBeetwenForm: {
    marginTop: 18,
  },
  pdLef: {
    flex: 1,
    paddingLeft: 20,
  },
  mgLef: {
    marginLeft: 50,
  },
});
