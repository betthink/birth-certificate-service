import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonBack from './ButtonBack';
import {stylesDariGaya} from './ImportedStyles';
import {hijau} from '../../Assets/StylingComponent/Coloring';
import {ipAdress} from './Url';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
const DetailScreenFormulir = ({navigation, route}) => {
  const [DataIbu, setDataIbu] = useState(null);
  const [DataAyah, setDataAyah] = useState(null);
  const [DataSaksi1, setDataSaksi1] = useState(null);
  const [DataSaksi2, setDataSaksi2] = useState(null);
  const {
    IdAnak,
    Nama,
    JenisKelamin,
    TempatPersalinan,
    TempatKelahiran,
    DateKelahiran,
    TimeKelahiran,
    UrutanKelahiran,
    PenolongBayi,
    BeratBayi,
    PanjangBayi,
  } = route.params;
  // get data ibu
  const getDataIbu = () => {
    const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataIbu.php`;
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        // console.log(res.data.filter((val)=>IdAnak==val.Id));
        setDataIbu(res.data.filter(val => IdAnak == val.Id));
        // setDataIbu(res.data);
      })
      .catch(err => console.log(err));
  };
  // get data Ayah
  const getDataAyah = () => {
    const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAyah.php`;
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        // console.log(res.data.filter((val)=>IdAnak==val.Id));
        setDataAyah(res.data.filter(val => IdAnak == val.Id));
        // setDataAyah(res.data);
      })
      .catch(err => console.log(err));
  };
  // get data Saksi 1
  const getDataSaksi = () => {
    const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataSaksi1.php`;
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        // console.log(res.data.filter((val)=>IdAnak==val.Id));
        setDataSaksi1(res.data.filter(val => IdAnak == val.Id));
        // setDataSaksi1(res.data);
      })
      .catch(err => console.log(err));
  };
  // get data Saksi 1
  const getDataSaksi2 = () => {
    const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataSaksi2.php`;
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        // console.log(res.data.filter((val)=>IdAnak==val.Id));
        setDataSaksi2(res.data.filter(val => IdAnak == val.Id));
        // setDataSaksi2(res.data);
      })
      .catch(err => console.log(err));
  };
  // flatlist render item ayah
  const renderItemAyah = ({item}) => (
    <View
      style={[
        {
          backgroundColor: hijau,
          flex: 1,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          marginTop: 10,
        },
      ]}>
         <Text style={[{alignSelf: 'center', fontSize: 20}]}>Data Ayah</Text>
      <Text>{item.NIK}</Text>
      <Text>{item.Nama}</Text>
      <Text>{item.TempatKelahiran}</Text>
      <Text>{item.DateKelahiran}</Text>
      <Text>{item.Alamat}</Text>
      <Text>{item.Kewarganegaraan}</Text>
      <Text>{item.Kebangsaan}</Text>
      <Text>{item.Pekerjaan}</Text>
    </View>
  );
  // flatlist render item ibu
  const renderItemIbu = ({item}) => (
    <View
      style={[
        {
          backgroundColor: hijau,
          flex: 1,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          marginTop: 10,
        },
      ]}>
      <Text style={[{alignSelf: 'center', fontSize: 20}]}>Data Ibu</Text>
      <Text>{item.NIK}</Text>
      <Text>{item.Nama}</Text>
      <Text>{item.TempatKelahiran}</Text>
      <Text>{item.DateKelahiran}</Text>
      <Text>{item.Alamat}</Text>
      <Text>{item.Kewarganegaraan}</Text>
      <Text>{item.Kebangsaan}</Text>
      <Text>{item.Pekerjaan}</Text>
    </View>
  );
  // flatlist render item Saksi
  const renderItemSaksi = ({item}) => (
    <View
      style={[
        {
          backgroundColor: hijau,
          flex: 1,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          marginTop: 10,
        },
      ]}>
          <Text style={[{alignSelf: 'center', fontSize: 20}]}>Data Saksi 1</Text>
      <Text>{item.NIK}</Text>
      <Text>{item.Nama}</Text>
      <Text>{item.TempatKelahiran}</Text>
      <Text>{item.DateKelahiran}</Text>
      <Text>{item.Alamat}</Text>
      <Text>{item.Kewarganegaraan}</Text>
      <Text>{item.Kebangsaan}</Text>
    </View>
  );
  // flatlist render item Saksi 2
  const renderItemSaksi2 = ({item}) => (
    <View
      style={[
        {
          backgroundColor: hijau,
          flex: 1,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          marginTop: 10,
        },
      ]}>
        <Text style={[{alignSelf: 'center', fontSize: 20}]}>Data Saksi 2</Text>
      <Text>{item.NIK}</Text>
      <Text>{item.Nama}</Text>
      <Text>{item.TempatKelahiran}</Text>
      <Text>{item.DateKelahiran}</Text>
      <Text>{item.Alamat}</Text>
      <Text>{item.Kewarganegaraan}</Text>
      <Text>{item.Kebangsaan}</Text>
    </View>
  );

  useEffect(() => {
    getDataIbu();
    getDataAyah();
    getDataSaksi();
    getDataSaksi2();
    // console.log(DataIbu[1]);
    console.log(DataIbu);
  }, []);
  return (
    <View style={[{flex: 1}]}>
      <View style={[stylesDariGaya.headerBox]}>
        <ButtonBack buttontext={`Data Formulir`} />
      </View>
      <ScrollView contentContainerStyle={[{paddingVertical: 20}]}>
        {/* data bayi */}
        <View
          style={[
            {
              backgroundColor: hijau,
              flex: 1,
              paddingHorizontal: 20,
              marginHorizontal: 20,
            },
          ]}>
          <Text style={[{alignSelf: 'center', fontSize: 20}]}>Data Bayi</Text>
          <Text style={[styles.textStyle]}>{IdAnak}</Text>
          <Text style={[styles.textStyle]}>{JenisKelamin}</Text>
          <Text style={[styles.textStyle]}>{TempatPersalinan}</Text>
          <Text style={[styles.textStyle]}>{TempatKelahiran}</Text>
          <Text style={[styles.textStyle]}>{DateKelahiran}</Text>
          <Text style={[styles.textStyle]}>{TimeKelahiran}</Text>
          <Text style={[styles.textStyle]}>{UrutanKelahiran}</Text>
          <Text style={[styles.textStyle]}>{PenolongBayi}</Text>
          <Text style={[styles.textStyle]}>{BeratBayi}</Text>
          <Text style={[styles.textStyle]}>{BeratBayi}</Text>
        </View>
        {/* data ibu */}
        <FlatList data={DataIbu} renderItem={renderItemIbu} />
        {/* data ayah */}
        <FlatList data={DataAyah} renderItem={renderItemAyah} />
        {/* data Saksi */}
        <FlatList data={DataSaksi1} renderItem={renderItemSaksi} />
        {/* data Saksi */}
        <FlatList data={DataSaksi2} renderItem={renderItemSaksi2} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    // fontWeight: ''
  },
});

export default DetailScreenFormulir;
