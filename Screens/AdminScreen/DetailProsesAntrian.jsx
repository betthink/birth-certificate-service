import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInputMassage from '../Components/TextInputMassage';
import {stylesDariGaya} from '../Components/ImportedStyles';
import ButtonBack from '../Components/ButtonBack';
import GreenButton from '../Components/GreenButton';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import {putih, ungu} from '../../Assets/StylingComponent/Coloring';

const DetailProsesAntrian = ({route, navigation}) => {
  const {IdAntrian, Nama, IdAdmin} = route.params;
  const [dataUpload, setdataUpload] = useState(null);
  const [IdUser, setIdUser] = useState(null);
  const [waktuPendaftaran, setwaktuPendaftaran] = useState(null);
  const [valuInput, setvaluInput] = useState('');
  const KirimPesan = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/update/KirimPesanPemberitahuan.php`,
      data: {
        Id: IdUser,
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
        url: `${ipAdress}/aplikasiLayananAkta/api/apiDataBayiJoinFileUploadFilterById.php`,
        data: {IdAnak: IdAntrian},
        headers: {'Content-Type': 'multipart/form-data'},
      });

      const data = res.data;
      // console.log(data);

      setdataUpload(data);
      setIdUser(data[0].IdUser);
      setwaktuPendaftaran(data[0].waktu_upload);
    } catch (error) {
      console.log(error);
    }
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
      console.log(res.data);
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
  useEffect(() => {
    getDataFile();
  }, []);
  return (
    <View style={[{flex: 1}]}>
      <View style={[stylesDariGaya.headerBox]}>
        <ButtonBack buttontext={'Kembali'} />
      </View>
      <View style={[{paddingHorizontal: 20}]}>
        {/* top content */}
        <View>
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
          <Text>Id antrian :{IdAntrian}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FormulirScreen', {IdAntrian})}
            style={[
              {backgroundColor: ungu, height: 30, justifyContent: 'center'},
            ]}>
            <Text style={[{color: putih}]}>Formulir</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataUpload}
          renderItem={({item}) => (
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: putih,
                  paddingVertical: 20,
                },
              ]}>
              <View>
                {/* <Text>{item.IdAnak}</Text> */}
                <Text>{item.KK}</Text>
                <Text>{item.IdAnak}</Text>
                <Text>{item.KTP_Ibu}</Text>
                <Text>{item.KTP_Ayah}</Text>
                <Text>{item.Ket_Nikah}</Text>
                <Text>{item.Ket_LahirAnak}</Text>
                <Text>{item.KTP_Saksi}</Text>
                <Text>{item.KTP_Saksi2}</Text>
              </View>
              <View>
                <GreenButton
                  actionOnclick={() => console.log('Download Presed')}
                  ButtonText={'Download'}
                />
              </View>
            </View>
          )}
        />
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            },
          ]}>
          <TextInputMassage setValue={setvaluInput} valuInput={valuInput} />
          <GreenButton
            ButtonText={'Kirim'}
            actionOnclick={() => KirimPesan()}
          />
        </View>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
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
        </View>
      </View>
    </View>
  );
};

export default DetailProsesAntrian;
