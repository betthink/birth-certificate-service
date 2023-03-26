import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, { useState,useEffect } from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { FlatList } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HeaderBox from '../Components/HeaderBox';
import { ipAdress } from '../Components/Url';
import axios from  'axios'
const Tab = createMaterialTopTabNavigator();
// color=====================
const colorPink = '#B930B4';
const colorHijau = '#28AFB0';
const colorKuning = '#F7CD1C';
const colorUngu = '#2E0FEF';
function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},

        // tabBarItemStyle: {width: "100%"},
        tabBarStyle: {backgroundColor: '#24CE9E'},
        style: {backgroundColor: 'red', marginTop: insets.top},
      }}>
      <Tab.Screen
     
        name="AntrianTerdaftar"
        component={AntrianTerdaftar}
        options={{tabBarLabel: 'Antrian Terdaftar', }}

      />
      <Tab.Screen
        name="AntrianDiproses"
        component={AntrianDiproses}
        options={{tabBarLabel: 'Antrian Diproses' , }}
      />
    </Tab.Navigator>
  );
}
// Data for both Page
//  export const DataTerdaftar = [
//   {
//     id: 0,
//     nomorAntrian: '01',
//     nama: 'Robet',
//     waktuBuat: '01-01-2022',
//     waktuAmbil: '07-01-2022',
//   },
//   {
//     id: 1,
//     nomorAntrian: '02',
//     nama: 'Rafi',
//     waktuBuat: '01-01-2022',
//     waktuAmbil: '07-01-2022',
//   },
//   {
//     id: 2,
//     nomorAntrian: '03',
//     nama: 'Fajar',
//     waktuBuat: '01-01-2022',
//     waktuAmbil: '07-01-2022',
//   },
//   {
//     id: 3,
//     nomorAntrian: '04',
//     nama: 'Fajar',
//     waktuBuat: '01-01-2022',
//     waktuAmbil: '07-01-2022',
//   },
//   {
//     id: 4,
//     nomorAntrian: '05',
//     nama: 'Fajar',
//     waktuBuat: '01-01-2022',
//     waktuAmbil: '07-01-2022',
//   },
//   {
//     id: 5,
//     nomorAntrian: '05',
//     nama: 'Fajar',
//     waktuBuat: '01-01-2022',
//     waktuAmbil: '07-01-2022',
//   },
//   {
//     id: 6,
//     nomorAntrian: '05',
//     nama: 'Fajar',
//     waktuBuat: '01-01-2022',
//     waktuAmbil: '07-01-2022',
//   },
// ];
// Screens


function AntrianTerdaftar() {
// * funtion tampilkan antrian terdaftar
const url =
` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`
const [dataAntrian, setDataAntrian] = useState();
const getApi = () => {
 axios({
   method: 'POST',
   url: `${url}`,
 })
   .then(res => {
    
    let data = res.data;
    data = data.filter(d=> d.Status == "Terdaftar")
    // console.log(data, "ini data antrian terdaftar");

    setDataAntrian(data)})
   .catch(err => console.log(err)); 
};
useEffect(() => {

  getApi();
  console.log("ambil data Antrian terdaftar");
 }, [getApi()]);
  return (
    <View
      style={[{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}]}>
      <FlatList
        data={dataAntrian}
        renderItem={({item}) => (
          <View
            style={[
              {
                flex: 1,
                backgroundColor: '#F7F7F7',
                marginVertical: 5,
                alignSelf: 'center',
                width: '80%',
                justifyContent: 'center',
                borderLeftWidth: 3,
                borderColor: '#24CE9E',
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',

                height: 100,
              },
            ]}>
            {/*  colom 1 */}
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: '#D9D9D9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcon size={30} style={{color: '#24CE9E'}} name="check" />
            </View>
            {/* colom 2 */}
            <View style={{justifyContent: 'space-between'}}>
              {/* ============ */}
              <View>
                <View style={[StyleFlatlist.boxStyle]}>
                  <View
                    style={
                      [StyleFlatlist.boxColors, {backgroundColor: colorPink}]
                      // borderRadius: 7,
                    }
                  />
                  <Text>{item.IdAntrian}</Text>
                </View>
                <View style={[StyleFlatlist.boxStyle]}>
                  <View
                    style={
                      [StyleFlatlist.boxColors, {backgroundColor: colorUngu}]
                      // borderRadius: 7,
                    }
                  />
                  <Text>{item.IdAntrian}</Text>
                </View>
              </View>
            </View>
            {/* colom 3 */}
            <View style={{justifyContent: 'space-between'}}>
              {/* ============ */}
              <View>
                <View style={[StyleFlatlist.boxStyle]}>
                  <View
                    style={{
                      height: 14,
                      width: 14,
                      // borderRadius: 7,
                      backgroundColor: colorHijau,
                    }}
                  />
                  <Text>{item.WaktuPendaftaran}</Text>
                </View>
                <View style={[StyleFlatlist.boxStyle]}>
                  <View
                    style={
                      [StyleFlatlist.boxColors, {backgroundColor: colorKuning}]
                      // borderRadius: 7,
                    }
                  />
                  <Text>{item.WaktuSelesai}</Text>
                </View>
              </View>
            </View>
            {/* ============================== */}
          </View>
        )}
      />
    </View>
  );
}
function AntrianDiproses() {
  // * funtion tampilkan antrian diproses
const url =
` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`
const [dataAntrian, setDataAntrian] = useState();
const getApi = () => {
 axios({
   method: 'POST',
   url: `${url}`,
 })
   .then(res => {
    
    let data = res.data;
    data = data.filter(d=> d.Status == "Diproses")
    // console.log(data, "ini data antrian Diproses");
    setDataAntrian(data)})
   .catch(err => console.log(err)); 
};
useEffect(() => {

  getApi();
  console.log("ambil data Antrian Doproses");
 }, [getApi()]);
  return (
    <View
    style={[{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}]}>
    <FlatList
      data={dataAntrian}
      renderItem={({item}) => (
        <View
          style={[
            {
              flex: 1,
              backgroundColor: '#F7F7F7',
              marginVertical: 5,
              alignSelf: 'center',
              width: '80%',
              justifyContent: 'center',
              borderLeftWidth: 3,
              borderColor: '#24CE9E',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',

              height: 100,
            },
          ]}>
          {/*  colom 1 */}
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#D9D9D9',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcon size={30} style={{color: '#24CE9E'}} name="check" />
          </View>
          {/* colom 2 */}
          <View style={{justifyContent: 'space-between'}}>
            {/* ============ */}
            <View>
              <View style={[StyleFlatlist.boxStyle]}>
                <View
                  style={
                    [StyleFlatlist.boxColors, {backgroundColor: colorPink}]
                    // borderRadius: 7,
                  }
                />
                <Text>{item.IdAntrian}</Text>
              </View>
              <View style={[StyleFlatlist.boxStyle]}>
                <View
                  style={
                    [StyleFlatlist.boxColors, {backgroundColor: colorUngu}]
                    // borderRadius: 7,
                  }
                />
                <Text>{item.IdAntrian}</Text>
              </View>
            </View>
          </View>
          {/* colom 3 */}
          <View style={{justifyContent: 'space-between'}}>
            {/* ============ */}
            <View>
              <View style={[StyleFlatlist.boxStyle]}>
                <View
                  style={{
                    height: 14,
                    width: 14,
                    // borderRadius: 7,
                    backgroundColor: colorHijau,
                  }}
                />
                <Text>{item.WaktuPendaftaran}</Text>
              </View>
              <View style={[StyleFlatlist.boxStyle]}>
                <View
                  style={
                    [StyleFlatlist.boxColors, {backgroundColor: colorKuning}]
                    // borderRadius: 7,
                  }
                />
                <Text>{item.WaktuSelesai}</Text>
              </View>
            </View>
          </View>
          {/* ============================== */}
        </View>
      )}
    />
  </View>
  );
}
// ============================================
const AntrianLayananScreen = () => {
  return (
 
      <MyTabs /> 
  
  );
};

export default AntrianLayananScreen;

const StyleFlatlist = StyleSheet.create({
  boxColors: {
    color: '#24CE9E',
    height: 14,
    width: 14,
  },
  boxStyle: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 5,
  },
});
