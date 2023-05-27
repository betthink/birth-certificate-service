import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stylesDariGaya} from '../Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {fotoUrl} from '../../Assets/Url';
import DocumentPicker from 'react-native-document-picker';
// import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import ButtonBack from '../Components/ButtonBack';

const EditDataUserUmum = ({navigation, route}) => {
  // terima data
  // navigation.navigate('EditDataUserUmum', {dataUser: alldata});
  const {Nama, Password, NIK, NomorTelp, Email, Id, FotoProfile} = route.params;
  // console.log(dataUser, "ambil all data");
  const [passwordState, setPasswordState] = useState(Password);
  const [namaState, setNamaState] = useState(Nama);
  const [emailState, setEmailState] = useState(Email);
  const [nomorTelpState, setnomorTelpState] = useState(NomorTelp);
  // const [NIKState, setNIKState] = useState(NIK);
  const [fotoProfileState, setFotoProfileState] = useState(FotoProfile);
  //   // *kirim data ke API
  async function EditDataUser() {
    try {
      const formData = new FormData();

      formData.append('Password', passwordState);
      formData.append('Nama', namaState);
      formData.append('Email', emailState);
      formData.append('Id', Id);
      // formData.append('NIK', NIK);
      formData.append('NomorTelp', nomorTelpState);
      // formData.append('FotoProfile', fotoProfileState);

      const res = await axios.post(
        `${ipAdress}/aplikasiLayananAkta/update/AkunUserUmum.php`,
        formData,
        {headers: {'Content-Type': 'multipart/form-data'}},
      );
      console.log(res.data);
      const {value, message} = res.data;
      if (value == 1) {
        alert(message);
       navigation.goBack();
      } else {
        alert(message);
      }
    } catch (error) {
      alert('Gagal Membuat akun');
      console.log(error);
    }

    // console.log(res.data['message']);
  }

  const sizeIcon = 30;
  // * add file
  // const pickDocument = async setData => {
  //   try {
  //     const result = await DocumentPicker.pickSingle({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     setData(result);
  //     console.log(result.name, 'ini nama dari result');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    console.log("Nama :",namaState);
    console.log("PAss :",passwordState);
    console.log("Email :",emailState);
    console.log("nomor :",nomorTelpState);
    console.log("foto :",fotoProfileState);
  }, [namaState, passwordState, emailState, nomorTelpState, fotoProfileState]);
  return (
    <View style={{backgroundColor: putih, flex: 1}}>
      <View style={[stylesDariGaya.headerBox]}>
        <ButtonBack buttontext={'Kembali'} />
      </View>

      {/* Form */}
      <ScrollView style={[StyleForm.container]}>
        {/* header */}
        <Image
          style={[{height: 200}]}
          resizeMode="cover"
          source={{
            uri: `${ipAdress}/aplikasiLayananAkta/uploads/FotoProfile/${NIK}/${FotoProfile}`,
          }}
        />
        <View style={[{paddingHorizontal: 20}]}>
          {/* Nama */}
          <View style={[StyleForm.spaceBeetwenForm]}>
            <View style={{marginLeft: 30}}>
              <Text>Nama</Text>
            </View>
            <View style={[StyleForm.containerForm]}>
              <MaterialIcon name="user" size={sizeIcon} color={hijau} />
              <View style={[{flex: 1}]}>
                <TextInput
                  onChangeText={text => setNamaState(text)}
                  value={namaState}
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
              <MaterialIcon name="user" size={sizeIcon} color={hijau} />
              <View style={[{flex: 1}]}>
                <TextInput
                  onChangeText={text => setPasswordState(text)}
                  value={passwordState}
                  style={[stylesDariGaya.formInput, StyleForm.textInput]}
                />
              </View>
            </View>
          </View>

          {/* NIK */}
          {/* <View style={[StyleForm.spaceBeetwenForm]}>
            <View style={{marginLeft: 30}}>
              <Text>NIK</Text>
            </View>
            <View style={[StyleForm.containerForm]}>
              <MaterialIcon name="idcard" size={sizeIcon} color={hijau} />
              <View style={[{flex: 1}]}>
                <TextInput
                  onChangeText={text => setNIKState(text)}
                  value={NIKState}
                  style={[stylesDariGaya.formInput, StyleForm.textInput]}
                />
              </View>
            </View>
          </View> */}

          {/* No. Telp */}
          <View style={[StyleForm.spaceBeetwenForm]}>
            <View style={{marginLeft: 30}}>
              <Text>No. Telp</Text>
            </View>
            <View style={[StyleForm.containerForm]}>
              <MaterialIcon name="phone" size={sizeIcon} color={hijau} />
              <View style={[{flex: 1}]}>
                <TextInput
                  onChangeText={text => setnomorTelpState(text)}
                  value={nomorTelpState}
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
              <MaterialIcon name="mail" size={sizeIcon} color={hijau} />
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
          {/* <TouchableOpacity
            style={{
              backgroundColor: putihGelap,
              flex: 1,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              // borderWidth: 4,
              borderColor: '#fff',
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: 20,
            }}
            onPress={() => {
              pickDocument(setFotoProfileState);
              // console.log("hgh");
            }}>
            <Image
              // size={50}
              style={[{height: 50}]}
              resizeMode="center"
              source={{
                uri: `${ipAdress}/aplikasiLayananAkta/uploads/FotoProfile/${NIK}/${FotoProfile}`,
                // uri: `https://4devapps.com/aplikasiLayananAkta/uploads/FotoProfile/2/george-dagerotip-C_LtS_cNEU4-unsplash.jpg`,
              }}
            />
            <IonIcon
              style={{position: 'absolute', top: 5, right: 0}}
              name="add-circle"
              size={20}
              color={'#24CE9E'}
            />
          </TouchableOpacity> */}
          {/* Button save edit */}
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
        </View>
      </ScrollView>
    </View>
  );
};

export default EditDataUserUmum;

const StyleForm = StyleSheet.create({
  container: {flex: 1},
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
