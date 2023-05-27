import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {stylesDariGaya} from '../Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {pickSingle, isCancel} from 'react-native-document-picker';
import {fotoUrl} from '../../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  hijau,
  hitam,
  pinkGelap,
  putih,
  putihGelap,
  toska,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import {ipAdress} from '../Components/Url';
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
  const [valueStatus, setvalueStatus] = useState(StatusLayanan);
  const [ubahBoolean, setubahBoolean] = useState(null);
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
  // ?UseeEffect=
  useEffect(() => {
    ambilCookie();
    // getNewData();

    // console.log('Ini status layaannanan', StatusLayanan);
    // console.log('Ini valueAntrian', valueAntrian);
    // console.log('Log dari useeffect', valueStatus);
    console.log(ubahBoolean, 'ini new bool setelah pembaruan');
  }, [valueStatus, ubahBoolean]);

  const ubahBolean = async () => {
    const newBool = valueStatus === 1 ? 0 : 1;
    setubahBoolean(newBool);

  };

  // function on off antrian
  async function kelolaBukaTutupAntrian() {
    console.log(ubahBoolean);
    try {
      console.log('ini harusnya kedua');
      const res = await axios({
        method: 'POST',
        data: {
          Id: Id,
          StatusLayanan: 0,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/BukaTutupAntrian.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      const {value, message, StatusLayanan} = res.data;
      console.log(res.data);

      if (StatusLayanan == 1) {
        console.log('antrian Terbuka');
        setvalueStatus(1);
      } else {
        console.log('antrian Tertutup');
        setvalueStatus(0);
      }
    } catch (error) {
      alert('koneksi sedang tidak bagus, sihlakan coba lagi?');
      console.log(error);
    }
  }

  // tampilkan lagi data user /

  // const getNewData = async () => {
  //   const url = `${ipAdress}/aplikasiLayananAkta/api/apiDataUserAdmin.php`;
  //   await axios({
  //     method: 'POST',
  //     url: `${url}`,
  //   })
  //     .then(res => {
  //       let data = res.data;

  //       const datafilter = data.filter(d => d.Id == Id);
  //       // const {StatusLayanan} = datafilter;
  //       // const {StatusLayanan} = data;

  //       const statusLayanan = datafilter.map(item => item.StatusLayanan);
  //       const statusLayananIndex = statusLayanan[0];
  //       setvalueStatus(statusLayananIndex);
  //       console.log(statusLayananIndex);
  //     })
  //     .catch(err => console.log(err));
  // };

  // const changeAntrian = async () => {
  //   try {
  //     // await ubahBolean();
  //     await kelolaBukaTutupAntrian();
  //     // await getNewData();
  //   } catch (error) {
  //     console.error('Terjadi kesalahan:', error);
  //   }
  // };


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
        {/* foto profile */}
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
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* image profile */}
            <TouchableOpacity
              style={{
                // backgroundColor: ungu,

                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 4,
                borderColor: pinkGelap,
                borderRadius: 50,
                position: 'absolute',
                top: -30,
              }}
              onPress={() => {
                openDocument();
              }}>
              <Image
                style={[{width: 80, height: 80, borderRadius: 45}]}
                source={{uri: `${ipAdress}/aplikasiLayananAkta/uploads/FotoProfile/${nik}/${fotoProfile}`}}
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
          {/* Turn on / off antrian */}
          <TouchableOpacity
            onPress={async () => {
              try {
                await ubahBolean();
                await kelolaBukaTutupAntrian();
                // console.log('presed');
              } catch (error) {
                console.log(error);
              }
            }}
            style={[styleButtons.buttons, {backgroundColor: '#454545'}]}>
            <MaterialIcon name="logout" color={putih} />
            {valueStatus == 1 ? (
              <Text style={[{color: putih}]}> Terbuka</Text>
            ) : (
              <Text style={[{color: putih}]}>Tertutup</Text>
            )}
          </TouchableOpacity>
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
