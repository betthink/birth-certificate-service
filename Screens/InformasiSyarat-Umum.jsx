import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ButtonBack from './Components/ButtonBack';
import {Grey, putih, ungu} from '../Assets/StylingComponent/Coloring';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const InformasiSyarat = () => {
  const [showUUD, setshowUUD] = useState(false);
  const [showSyarat, setshowSyarat] = useState(false);
  const [showManfaat, setshowManfaat] = useState(false);
  //   uud
  const visibleContentUUD = () => {
    setshowUUD(!showUUD);
    // console.log(showContent);
    console.log('Press visible uud');
  };
  //   syarat
  const visibleContentshowSyarat = () => {
    setshowSyarat(!showSyarat);
    // console.log(showContent);
    console.log('Press visible showSyarat');
  };
  //   manfaat
  const visibleContentshowManfaat = () => {
    setshowManfaat(!showManfaat);
    // console.log(showContent);
    console.log('Press visible setshowManfaat');
  };
  return (
    <View>
      <View
        style={[
          {
            backgroundColor: putih,
            height: 70,
            elevation: 5,
            // alignItems: 'flex-start',
            justifyContent: 'center',        
          },
        ]}>
        <ButtonBack buttontext={'Informasi Syarat '} />
      </View>
      {/* banner */}
      <View style={[{backgroundColor: ungu}]}>
        <Image
          style={[
            {resizeMode: 'cover', width: 200, height: 200, alignSelf: 'center'},
          ]}
          source={require('../Assets/Images/ReadingInformation.png')}
        />
      </View>
      {/* Pasall */}
      <ScrollView style={[{marginBottom: 10}]}>
        <ScrollView scrollEnabled={true} style={styleList.container}>
          <TouchableOpacity onPress={visibleContentUUD}>
            <View style={styleList.titleContainer}>
              <Text style={styleList.title}>
                Pasal 263 KUHP Kitab Undang-Undang Hukum Pidana
              </Text>
              <MaterialIcon name={'keyboard-arrow-right'} size={30} />
            </View>
          </TouchableOpacity>

          {showUUD && (
            <View style={styleList.body}>
              <Text
                style={{
                  textAlign: 'justify',
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderColor: Grey,
                }}>
                1. Barangsiapa membuat surat palsu atau memalsukan surat, yang
                dapat menerbitkan sesuatu hak, sesuatu perjanjian (kewajiban)
                atau sesuatu pembebasan utang, atau yang boleh dipergunakan
                sebagai keterangan bagi sesuatu perbuatan, dengan maksud akan
                menggunakan atau menyuruh orang lain menggunakan surat-surat itu
                seolah-olah surat itu asli dan tidak dipalsukan, maka kalau
                mempergunakannya dapat mendatangkan sesuatu kerugian dihukum
                karena pemalsuan surat, dengan hukuman penjara selama-lamanya
                enam tahu
              </Text>
              <Text style={{textAlign: 'justify'}}>
                2. Dengan hukuman serupa itu juga dihukum, barangsiapa dengan
                sengaja menggunakan surat palsu atau yang dipalsukan itu
                seolah-olah surat itu asli dan tidak dipalsukan, kalau hal
                mempergunakan dapat mendatangkan sesuatu kerugian (K.U.H.P. 35,
                52, 64-2, 276, 277, 416, 417, 486).
              </Text>
            </View>
          )}
        </ScrollView>
        {/* Syarat permohonan */}
        <ScrollView scrollEnabled={true} style={styleList.container}>
          <TouchableOpacity onPress={visibleContentshowSyarat}>
            <View style={styleList.titleContainer}>
              <Text style={styleList.title}>
                Syarat Permohonan Pembuatan Akta
              </Text>
              <MaterialIcon name={'keyboard-arrow-right'} size={30} />
            </View>
          </TouchableOpacity>

          {showSyarat && (
            <View style={styleList.body}>
              <Text
                style={{
                  textAlign: 'justify',
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderColor: Grey,
                }}>
                1. Isi formulir dari form yang tersedia, mulai dari Data Bayi,
                Ibu, ayah, Saksi 1
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  borderBottomWidth: 1,
                  borderColor: Grey,
                }}>
                2. Upload file mulai dari scan KK, KTP IBU, KTP AYAH, KTP SAKSI
                1 DAN KTP SAKSI 2
              </Text>
            </View>
          )}
        </ScrollView>
        {/* Manfaat Pembuatan akta */}
        <ScrollView scrollEnabled={true} style={styleList.container}>
          <TouchableOpacity onPress={visibleContentshowManfaat}>
            <View style={styleList.titleContainer}>
              <Text style={styleList.title}>
                Manfaat Pembuatan Akta Kelahiran
              </Text>
              <MaterialIcon name={'keyboard-arrow-right'} size={30} />
            </View>
          </TouchableOpacity>

          {showManfaat && (
            <View style={styleList.body}>
              <Text
                style={{
                  textAlign: 'justify',
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderColor: Grey,
                }}>
                1. Pengakuan Negara mengenai status individu, Dokumen / bukti
                sah mengenai identitas seseorang;
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  borderBottomWidth: 1,
                  borderColor: Grey,
                }}>
                2. Bahan rujukan penetapan identitas dalam dokumen lain,
                Pendaftaran sekolah ,Melamar pekerjaan ,Pengurusan Tunjangan
                Keluarga ,Pencatatan pernikahan ,Pengurusan pengangkatan anak,
                pengakuan anak ,Pengurusan beasiswa dll.
              </Text>
            </View>
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styleList = StyleSheet.create({
  container: {
    // width: 380,

    padding: 5,
    // borderRadius: 12,
    backgroundColor: '#fff',
    marginTop: 10,

    overflow: 'hidden',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: ungu,
    marginHorizontal: 22,
    // marginVertical: 5,
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 300,
  },
  body: {
    paddingLeft: 20,
    paddingRight: 40,
    paddingVertical: '3%',
    marginBottom: 10,
    width: 340,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default InformasiSyarat;
