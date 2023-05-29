import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stylesDariGaya} from './Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ListSyarat from './Components/ListSyarat';
import ButtonBack from './Components/ButtonBack';
import {Grey, Kuning, greenTea, putihGelap, ungu} from '../Assets/StylingComponent/Coloring';
// import { Image } from 'react-native-svg';

export default function SyaratScreen({navigation}) {
  const data = [
    {
      id: 0,
      title: 'Pasal 263 KUHP (Kitab Undang-Undang Hukum Pidana)',
      body: '(1) Barangsiapa membuat surat palsu atau memalsukan surat, yang dapat menerbitkan sesuatu hak, sesuatu perjanjian (kewajiban) atau sesuatu pembebasan utang, atau yang boleh dipergunakan sebagai keterangan bagi sesuatu perbuatan, dengan maksud akan menggunakan atau menyuruh orang lain menggunakan surat-surat itu seolah-olah surat itu asli dan tidak dipalsukan, maka kalau mempergunakannya dapat mendatangkan sesuatu kerugian dihukum karena pemalsuan surat, dengan hukuman penjara selama-lamanya enam tahu (2) Dengan hukuman serupa itu juga dihukum, barangsiapa dengan sengaja menggunakan surat palsu atau yang dipalsukan itu seolah-olah surat itu asli dan tidak dipalsukan, kalau hal mempergunakan dapat mendatangkan sesuatu kerugian (K.U.H.P. 35, 52, 64-2, 276, 277, 416, 417, 486).',
    },
    {
      id: 1,
      title: 'Syarat Permohonan Pembuatan Akta',
      body: '(1) Isi formulir dari form yang tersedia, mulai dari Data Bayi, Ibu, ayah, Saksi 1 dan Saksi, (2) Upload file mulai dari scan KK, KTP IBU, KTP AYAH, KTP SAKSI 1 DAN KTP SAKSI 2',
    },
    {
      id: 2,
      title: 'Manfaat Pembuatan Akta Kelahiran',
      body: '1.Pengakuan Negara mengenai status individu, Dokumen / bukti sah mengenai identitas seseorang;, 2.Bahan rujukan penetapan identitas dalam dokumen lain,Pendaftaran sekolah;,Melamar pekerjaan;,Pengurusan Tunjangan Keluarga;,Pencatatan pernikahan;,Pengurusan pengangkatan anak, pengakuan anak;,Pengurusan beasiswa.',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: putihGelap}}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Infromasi Syarat'} />
      </View>
      <View style={[{resizeMode: 'cover', flex: 1}]}>
        {/* <Image  /> */}

        <View style={[{flex: 1, backgroundColor: ungu,}]}>
          <Image
            style={[{resizeMode: 'cover',  width: 200, height: 200, alignSelf: 'center'}]}
            source={require('../Assets/Images/ReadingInformation.png')}
          />
          <View style={[{flex: 1, backgroundColor: putihGelap}]}>
          <FlatList
            style={[{marginVertical: 20}]}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <ListSyarat title={item.title} bodyText={item.body} />
            )}
          /></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
