import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
// import {DataTerdaftar} from '../UmumScreen/AntrianLayananScreen';
import {styleAntian} from '../UmumScreen/BuatAntrian';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const IconDownload = 'download';
function LayananDiproses({navigation}) {
  // icons
  // size icons
  const sizeIcon = 30;
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      <View style={[stylesDariGaya.containerBoxHijau]}>
        {/* Text atas */}

        <View style={[{flexDirection: 'row'}]}>
          <View>
            <Text>Nama</Text>
            <Text style={[styleHalAntrian.spaceTiap]}>Id Antrian</Text>
          </View>
          <View style={[{marginLeft: 50}]}>
            <Text style={[stylesDariGaya.BorderLeftHijau]}>Robetson</Text>
            <Text
              style={[
                stylesDariGaya.BorderLeftHijau,
                styleHalAntrian.spaceTiap,
              ]}>
              001
            </Text>
          </View>
          <View style={[{position: 'absolute', right: 0, top: 35}]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileUmumScreen')}>
              <Text style={[{color: hijau}]}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Download Files */}
        <ScrollView style={[{marginVertical: 20}]}>
          {/* Formulir Permohonan data */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>
              Formulir Permohonan akta
            </Text>
            <TouchableOpacity onPress={() => {}}>
              {/* <View style={{height: 10, width: 10, backgroundColor: 'tomato'}} /> */}
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan KK */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KK</Text>
            <TouchableOpacity onPress={() => {}}>
              {/* <View style={{height: 10, width: 10, backgroundColor: 'tomato'}} /> */}
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan KTP Ibu */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KTP Ibu</Text>
            <TouchableOpacity onPress={() => {}}>
              {/* <View style={{height: 10, width: 10, backgroundColor: 'tomato'}} /> */}
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan KTP Bapak */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan KTP Bapak</Text>
            <TouchableOpacity onPress={() => {}}>
              {/* <View style={{height: 10, width: 10, backgroundColor: 'tomato'}} /> */}
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan Buku Nikah */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>Scan Buku Nikah</Text>
            <TouchableOpacity onPress={() => {}}>
              {/* <View style={{height: 10, width: 10, backgroundColor: 'tomato'}} /> */}
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
          {/* Scan Surat Keterangan Lahir */}
          <View style={[styleAntian.formInputFile]}>
            <Text style={[styleAntian.fontContent]}>
              Scan Surat Keterangan Lahir
            </Text>
            <TouchableOpacity onPress={() => {}}>
              {/* <View style={{height: 10, width: 10, backgroundColor: 'tomato'}} /> */}
              <MaterialIcon nama={IconDownload} size={sizeIcon} color={hijau} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* end container box hijau */}
      {/* pesan kepada user */}
      <View
        style={[
          {flexDirection: 'row', margin: 30, justifyContent: 'space-between'},
        ]}>
        <TextInput placeholder="Pesan ke user" style={[{width: '45%'}]} />
        <TouchableOpacity
          style={[
            stylesDariGaya.Tombols,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Text style={[stylesDariGaya.textColorWhite]}>Selesai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LayananDiproses;
