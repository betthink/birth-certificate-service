import {
  View,
  Text,
  Alert,
  TextInput,
  Platform,
  Linking,
  Image,
  TouchableOpacity
} from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
// import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import GreenButton from '../Components/GreenButton';
import ButtonBack from '../Components/ButtonBack';
import {stylesDariGaya} from '../Components/ImportedStyles';
import {
  Grey,
  Kuning,
  Purple,
  pinkGelap,
  putih,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import TextInputMassage from '../Components/TextInputMassage';
// import {useNavigation} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import {AntDesign, FontAwesome5} from '../Components/Icons';
const CekDataPage = ({route, navigation}) => {
  // const navigation = useNavigation();
  const {IdAntrian, Nama} = route.params;
  const [dataUpload, setdataUpload] = useState(null);
  const [IdUser, setIdUser] = useState(null);
  const [waktuPendaftaran, setwaktuPendaftaran] = useState(null);
  const [valuInput, setvaluInput] = useState('');
  const [filezip, setfilezip] = useState(null);

  const KirimPesan = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/update/KirimPesanPemberitahuan.php`,
      data: {
        IdAnak: IdAntrian,
        Pemberitahuan: valuInput,
      },
      headers: {'Content-Type': 'multipart/form-data'},
    });
    console.log(res.data);
    const {value} = res.data;
    if (value == 1) {
      alert('Pesan berhasil di kirim');
    } else {
      alert('Pesan gagal di kirim');
    }
  };
  const getDataAntrianTerdaftar = async () => {
    try {
      const formData = new FormData();

      formData.append('IdAnak', IdAntrian);
      const res = await axios({
        method: 'POST',
        url: `${ipAdress}/aplikasiLayananAkta/api/apiFileUploadZip.php`,
        data:formData,
        headers: {'Content-Type': 'multipart/form-data'},
      });

      const data = res.data;
      // console.log(data);

      setdataUpload(data);
      console.log(data);
      setIdUser(data[0].IdUser);
      setwaktuPendaftaran(data[0].dateUpload);
      setfilezip(data[0].fileCompresed);
    } catch (error) {
      console.log(error);
    }
  };
  const TerimaAntrian = async () => {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          Id: IdAntrian,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/TerimaAntrian.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value} = res.data;
      if (value == 1) {
        alert('antrian Sudah diterimaaa');
        navigation.goBack();
        // navigation.navigate("AdminPageNavigation");
      } else {
        alert('gagal menerima antrian');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const TolakAntrian = async () => {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          Id: IdAntrian,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/TolakAntrian.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value} = res.data;
      if (value == 1) {
        alert('antrian Sudah ditolak');
        navigation.goBack();
      } else {
        alert('gagal menolak antrian');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // download file
  const openURL = async () => {
    // Cek apakah URL dapat dibuka
    const url = `${ipAdress}/aplikasiLayananAkta/download/downloadFiles.php?IdAnak=${IdAntrian}`;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Buka URL di browser eksternal
      await Linking.openURL(url);
    } else {
      console.log(`Tidak dapat membuka URL: ${url}`);
    }
  };

  useEffect(() => {
    // console.log(IdAntrian);
    getDataAntrianTerdaftar();
    console.log(valuInput);
  }, [valuInput]);
  return (
    <View style={[{flex: 1}]}>
      <View style={[stylesDariGaya.headerBox]}>
        <ButtonBack buttontext={'Cek Data'} />
      </View>
      <View
        style={[
          {
            backgroundColor: putih,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Image
          style={[{height: 200, resizeMode: 'cover', width: 200}]}
          source={require('../../Assets/Images/readMail.png')}
        />
      </View>
      <View style={[{padding: 20}]}>
        {/* top content */}

        <View style={[{backgroundColor: putih, marginTop: 10, padding: 10}]}>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text>Id User :</Text>
            <Text>{IdUser}</Text>
          </View>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text>Waktu Upload :</Text>
            <Text>{waktuPendaftaran}</Text>
          </View>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text>Nama :</Text>
            <Text>{Nama}</Text>
          </View>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text>Id antrian :</Text>
            <Text>{IdAntrian}</Text>
          </View>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: Kuning,
              },
            ]}>
            <Text>{filezip}</Text>
            <TouchableOpacity
              onPress={() => openURL()}
              style={[
                {
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: ungu,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 20,
                },
              ]}>
              <AntDesign name="download" size={20} color={putih} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={[
          {
            backgroundColor: Purple,
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
          },
        ]}>
        <TextInputMassage setValue={setvaluInput} valuInput={valuInput} />

        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
          <GreenButton
            width={'40%'}
            ButtonText={'Terima'}
            actionOnclick={async () => {
              try {
                await TerimaAntrian();
              } catch (error) {
                console.log(error);
              }
            }}
          />

          <GreenButton
            width={'40%'}
            ButtonText={'Tolak'}
            actionOnclick={async () => {
              try {
                await KirimPesan();
                await TolakAntrian();
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CekDataPage;
