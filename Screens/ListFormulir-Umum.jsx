import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {hijau, putih, ungu} from '../Assets/StylingComponent/Coloring';
import {ipAdress} from './Components/Url';
import axios from 'axios';
import ButtonBack from './Components/ButtonBack';
import {stylesDariGaya} from './Components/ImportedStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const ListFormulir = ({navigation, route}) => {
  const {IdUser} = route.params;
  const [data, setData] = useState(null);
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataBayi.php`;
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        // console.log(res.data.filter((val)=>IdUser==val.IdUser));
        setData(res.data.filter(val => IdUser == val.IdUser));
      })
      .catch(err => console.log(err));
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FormulirScreen', {
          IdAntrian: item.IdAnak,
          // Nama: item.Nama,
          // JenisKelamin: item.JenisKelamin,
          // TempatPersalinan: item.TempatPersalinwan,
          // TempatKelahiran: item.TempatKelahiran,
          // DateKelahiran: item.DateKelahiran,
          // TimeKelahiran: item.TimeKelahiran,
          // UrutanKelahiran: item.UrutanKelahiran,
          // PenolongBayi: item.PenolongBayi,
          // BeratBayi: item.BeratBayi,
          // PanjangBayi: item.PanjangBayi,
        })
      }
      style={{
        padding: 10,
        backgroundColor: ungu,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
        <AntDesign color={putih} name="profile" size={40} />
        {/* <Text>{item.IdAnak}</Text> */}
        <Text style={[{marginLeft: 20}]}>{item.Nama}</Text>
      </View>
      <AntDesign color={putih} name="right" size={30} />
    </TouchableOpacity>
  );
  useEffect(() => {
    getApi();
    console.log(data);
    console.log(IdUser);
  }, []);
  return (
    <View style={[{flex: 1, backgroundColor: putih}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'List Formulir'} />
      </View>
      {data == null ? (
        <View
          style={[
            {
              backgroundColor: hijau,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20
            },
          ]}>
          <Text>Belum ada data</Text>
        </View>
      ) : (
        <View style={[{paddingHorizontal: 20}]}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.IdAnak}
          />
        </View>
      )}
    </View>
  );
};

export default ListFormulir;