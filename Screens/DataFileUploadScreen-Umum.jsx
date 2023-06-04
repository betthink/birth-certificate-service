import {View, Text, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonBack from './Components/ButtonBack';
import {stylesDariGaya} from './Components/ImportedStyles';
import ListUploadFile from './Components/ListUploadFile';
import DefaultButtonBox from './Components/DefaultButtonBox';
import {hijau, ungu} from '../Assets/StylingComponent/Coloring';
import DocumentPicker from 'react-native-document-picker';
import {ipAdress} from './Components/Url';
import axios from 'axios';
const DataFileUploadScreen = ({navigation, route}) => {
  // add file
  const {IdAnak, IdUser} = route.params;
  // const IdAnak = 16;
  // const IdUser = 1;
  const [FileKK, setFileKK] = useState(null);
  const [FileKtpIbu, setFileKtpIbu] = useState(null);
  const [FileKtpAyah, setFileKtpAyah] = useState(null);
  const [FileKetNikah, setFileKetNikah] = useState(null);
  const [FileKetLahirAnak, setFileKetLahirAnak] = useState(null);
  const [FileSaksi1, setFileSaksi1] = useState(null);
  const [FileSaksi2, setFileSaksi2] = useState(null);
  // Function Pick document

  const pickDocument = async setData => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      setData(result);
      console.log(result.name, 'ini nama dari result');
    } catch (error) {
      console.log(error);
    }
  };
  const uploadFile = async () => {
    try {
      if (
        !FileKK ||
        !FileKtpIbu ||
        !FileKtpAyah ||
        !FileKetNikah ||
        !FileKetLahirAnak ||
        !FileSaksi1 ||
        !FileSaksi2
      ) {
        // Menampilkan pesan kesalahan jika ada input yang kosong
        alert('Mohon upload semua Berkas');
        return;
      }

      const formData = new FormData();

      formData.append('KK', FileKK);
      formData.append('KTP_Ibu', FileKtpIbu);
      formData.append('KTP_Ayah', FileKtpAyah);
      formData.append('Ket_Nikah', FileKetNikah);
      formData.append('Ket_LahirAnak', FileKetLahirAnak);
      formData.append('KTP_Saksi', FileSaksi1);
      formData.append('KTP_Saksi2', FileSaksi2);
      formData.append('IdUser', IdUser);
      formData.append('IdAnak', IdAnak);
      const response = await axios.post(
        `${ipAdress}/aplikasiLayananAkta/addData/UploadFileBerkasMakeZip.php`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log(response.data, 'Ini nilai dari res data Uploads');
      const {message, value} = response.data;
      if (value == 1) {
        alert('Berhasil membuat antrian');
      }
    } catch (error) {
      alert('Gagal membuat antrian');
      console.log('Document Picker Error:', error);
    }
  };
  // add to tabel antrianValid
  const addToAntrianValid = async () => {
    try {
      if (
        !FileKK ||
        !FileKtpIbu ||
        !FileKtpAyah ||
        !FileKetNikah ||
        !FileKetLahirAnak ||
        !FileSaksi1 ||
        !FileSaksi2
      ) {
        // Menampilkan pesan kesalahan jika ada input yang kosong
        alert('Mohon upload semua Berkas');
        return;
      }
      const res = await axios({
        method: 'POST',
        data: {IdAntrian: IdAnak, IdUser},
        url: `${ipAdress}/aplikasiLayananAkta/addData/addDataAntrianValid.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      const {value, message} = res.data;
      if (value == 1) {
        console.log(message);
        navigation.navigate('AntrianLayananScreen');
      } else {
        console.log(message);
      }
      console.log(res.data, 'ini data dari antrianValid');
    } catch (error) {}
  };

  useEffect(() => {}, []);

  return (
    <View style={[{flex: 1}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Upload persyaratan'} />
      </View>
      {/* content */}
      <ScrollView
        contentContainerStyle={[{paddingHorizontal: 20, paddingVertical: 20}]}>
        {/* KK */}
        <ListUploadFile
          titleList={FileKK == null ? 'ScanKK' : FileKK.name}
          MaterialIconName={FileKK == null ? 'addfile' : 'check'}
          onPressAction={() => pickDocument(setFileKK)}
          warna={FileKK == null ? ungu : hijau}
        />
        {/* KTP IBU */}
        <ListUploadFile
          titleList={FileKtpIbu == null ? 'Scan KTP Ibu' : FileKtpIbu.name}
          MaterialIconName={FileKtpIbu == null ? 'addfile' : 'check'}
          onPressAction={() => pickDocument(setFileKtpIbu)}
          warna={FileKtpIbu == null ? ungu : hijau}
        />
        {/* KTP Ayah */}
        <ListUploadFile
          titleList={FileKtpAyah == null ? 'Scan KTP Ayah' : FileKtpAyah.name}
          MaterialIconName={FileKtpAyah == null ? 'addfile' : 'check'}
          onPressAction={() => pickDocument(setFileKtpAyah)}
          warna={FileKtpAyah == null ? ungu : hijau}
        />
        {/* KTP Saksi1 */}
        <ListUploadFile
          titleList={FileSaksi1 == null ? 'Scan KTP Saksi1' : FileSaksi1.name}
          MaterialIconName={FileSaksi1 == null ? 'addfile' : 'check'}
          onPressAction={() => pickDocument(setFileSaksi1)}
          warna={FileSaksi1 == null ? ungu : hijau}
        />
        {/* KTP Saksi2 */}
        <ListUploadFile
          titleList={FileSaksi2 == null ? 'Scan KTP Saksi2' : FileSaksi2.name}
          MaterialIconName={FileSaksi2 == null ? 'addfile' : 'check'}
          onPressAction={() => pickDocument(setFileSaksi2)}
          warna={FileSaksi2 == null ? ungu : hijau}
        />
        {/* Ket NIkah */}
        <ListUploadFile
          titleList={
            FileKetNikah == null ? 'Scan Keterangan Nikah' : FileKetNikah.name
          }
          MaterialIconName={FileKetNikah == null ? 'addfile' : 'check'}
          onPressAction={() => pickDocument(setFileKetNikah)}
          warna={FileKetNikah == null ? ungu : hijau}
        />
        {/* Ket lahir anak */}
        <ListUploadFile
          titleList={
            FileKetLahirAnak == null
              ? 'Scan Keterangan lahir anak'
              : FileKetLahirAnak.name
          }
          MaterialIconName={FileKetLahirAnak == null ? 'addfile' : 'check'}
          onPressAction={() => pickDocument(setFileKetLahirAnak)}
          warna={FileKetLahirAnak == null ? ungu : hijau}
        />
        {/* button/ */}
        <DefaultButtonBox
          Title={'Daftar'}
          TitleColor={hijau}
          onClickAction={async () => {
            await uploadFile();
            await addToAntrianValid();
            // navigation.navigate("AntrianLayananScreen")
            console.log('Submit preesed');
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DataFileUploadScreen;
