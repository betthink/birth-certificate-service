import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInputMassage from '../Components/TextInputMassage';
import {stylesDariGaya} from '../Components/ImportedStyles';
import ButtonBack from '../Components/ButtonBack';
import GreenButton from '../Components/GreenButton';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import {
  Grey,
  Kuning,
  Purple,
  hitam,
  putih,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import {AntDesign, FontAwsome} from '../Components/Icons';

const DetailProsesAntrian = ({route, navigation}) => {
  const {IdAntrian, Nama, IdAdmin} = route.params;
  const [dataUpload, setdataUpload] = useState(null);
  const [IdUser, setIdUser] = useState(null);
  const [file, setfile] = useState(null);
  const [waktuPendaftaran, setwaktuPendaftaran] = useState(null);
  const [valuInput, setvaluInput] = useState('');
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

  const getDataFile = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${ipAdress}/aplikasiLayananAkta/api/apiFileUploadZip.php`,
        data: {IdAnak: IdAntrian},
        headers: {'Content-Type': 'multipart/form-data'},
      });

      const data = res.data;
      console.log(data, 'Ini data file');

      setdataUpload(data);
      setIdUser(data[0].IdUser);
      setfile(data[0].fileCompresed);
      setwaktuPendaftaran(data[0].dateUpload);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataBayiDanAntrian = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`,
    });
    const data= res.data;
    const filter = data.filter(d=> d.IdAntrian == IdAntrian);

    console.log(filter, 'Ini data dayi join Filter');
  };
  const SelesaikanAntrian = async () => {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          Id: IdAntrian,
          IdPengambilan: `${IdUser}${IdAntrian}${IdAdmin}`,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/LayananSelesai.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value, message} = res.data;
      console.log('Ini Id pengambilan', `${IdUser} ${IdAntrian} ${IdAdmin}`);
      console.log(res.data,"selesaikan layanan");
      if (value == 1) {
        alert(message);
        navigation.goBack();
        // navigation.navigate("AdminPageNavigation");
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const downloadFileWithUrl = async () => {
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
    getDataFile();
    getDataBayiDanAntrian();
  }, []);
  return (
    <View style={[{flex: 1}]}>
      <View style={[stylesDariGaya.headerBox]}>
        <ButtonBack buttontext={'Kembali'} />
      </View>
      {/* image heaer */}
      <View style={[{backgroundColor: putih}]}>
        <Image
          style={[
            {width: 300, height: 150, resizeMode: 'cover', alignSelf: 'center'},
          ]}
          source={require('../../Assets/Images/writing.png')}
        />
      </View>
      <View
        style={[
          {
            paddingHorizontal: 20,
            marginTop: 20,
            backgroundColor: Purple,
            flex: 1,
            paddingVertical: 20,
          },
        ]}>
        {/* top content */}
        <ScrollView>
          {/* Id user */}
          <View style={[styleLoc.ListTopContent]}>
            <Text style={[styleLoc.labelTopContent]}>Id User :</Text>
            <Text style={[styleLoc.FontTopContent]}>{IdUser}</Text>
          </View>
          {/* Waktu upload */}
          <View style={[styleLoc.ListTopContent]}>
            <Text style={[styleLoc.labelTopContent]}>Waktu Upload :</Text>
            <Text style={[styleLoc.FontTopContent]}>{waktuPendaftaran}</Text>
          </View>
          {/* Nama */}
          <View style={[styleLoc.ListTopContent]}>
            <Text style={[styleLoc.labelTopContent]}>Nama :</Text>
            <Text style={[styleLoc.FontTopContent]}>{Nama}</Text>
          </View>
          {/* Id antrian */}
          <View style={[styleLoc.ListTopContent]}>
            <Text style={[styleLoc.labelTopContent]}>Id antrian</Text>
            <Text style={[styleLoc.FontTopContent]}>{IdAntrian}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('FormulirScreen', {IdAntrian})}
            style={[
              {
                backgroundColor: ungu,
                padding: 20,
                justifyContent: 'center',
                // borderBottomWidth: 4,
                // borderColor: Kuning,
                flexDirection: 'row',
              },
            ]}>
            <Text style={[{color: putih, marginRight: 20, fontSize: 17, alignSelf: 'center', textDecorationLine: 'underline'}]}>
              Formulir
            </Text>
            <AntDesign color={putih} name="filetext1" size={20} />
          </TouchableOpacity>
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: putih,
                
                // paddingVertical: 20,
                // paddingHorizontal: 20,
              },
            ]}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  backgroundColor: Grey,
                  paddingHorizontal: 40,
                  flex: 1,
                  alignItems: 'center',
                  
                  borderColor: putih,
                },
              ]}>
              {/* <Text>{item.IdAnak}</Text> */}
              <FontAwsome name="file-zip-o" size={40} color={putih} />
              <Text style={[{fontSize: 20, color: putih, marginLeft: 10}]}>{file !== null ? `Berkas ${file}` : 'null'}</Text>
             
            </View>
            <View style={[{padding: 15, backgroundColor: ungu, borderRadius: 20}]}>
              <TouchableOpacity onPress={() => downloadFileWithUrl()}>
                <AntDesign color={putih} name="download" size={20} />
              </TouchableOpacity>
              {/* <GreenButton
                  actionOnclick={() => downloadFileWithUrl()}
                  ButtonText={'Download'}
                /> */}
            </View>
          </View>
          <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 50,
            },
          ]}>
          <TextInputMassage setValue={setvaluInput} valuInput={valuInput} />
          <GreenButton
            // ButtonText={'Kirim'}
            // actionOnclick={() => KirimPesan()}
            ButtonText={'Selesai'}
            actionOnclick={async () => {
              try {
                await KirimPesan();
                await SelesaikanAntrian();
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </View>
        </ScrollView>

        {/* <FlatList
          data={dataUpload}
          renderItem={({item}) => (
           
          )}
        /> */}
    
        {/* <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
          <GreenButton
            width={'40%'}
            ButtonText={'Selesai'}
            actionOnclick={async () => {
              try {
                await SelesaikanAntrian();
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </View> */}
      </View>
    </View>
  );
};

export default DetailProsesAntrian;
const styleLoc = StyleSheet.create({
  FontTopContent: {
    color: putih,
    fontSize: 16,
    fontWeight: '700',
  },
  ListTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Grey,
  },
  labelTopContent: {
    color: Grey,
  },
});
