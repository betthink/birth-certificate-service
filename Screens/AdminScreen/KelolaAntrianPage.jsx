import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
// import {DataTerdaftar} from '../UmumScreen/AntrianLayananScreen';
import {styleAntian} from '../UmumScreen/BuatAntrian';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {ipAdress} from '../Components/Url';
import axios from 'axios';
// import IonIcon from 'react-native-vector-icons/Ionicons'
const Tab = createMaterialTopTabNavigator();
const IconDownload = 'download';
// * Terdaftar====================================================================
function AntrianTerdaftarAdmin({navigation}) {
  const [dataAntrian, setDataAntrian] = useState([]);
  // const idAntrian = dataAntrian.IdAntrian;
  const getApi = () => {
    const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`;
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => console.log(setDataAntrian(res.data)))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getApi();
    // console.log("ambil data baru");
  }, []);

  // function select antrian
  function pilihAntrian() {
    const {idAntrian, nama} = dataAntrian;
    console.log(dataAntrian.idAntrian);
    navigation.navigate('DetailAntrian', {IdAntrian: item.IdAntrian});
  }

  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      <View style={[styleHalAntrian.containerBoxHijau]}>
        <FlatList
          data={dataAntrian}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailAntrian', {
                  IdAntrian: item.IdAntrian,
                })
              }>
              <View
                style={stylesDariGaya.listStyle}>
                <Text>{item.IdAntrian}</Text>
                <Text style={{marginLeft: 10}}>{item.WaktuPendaftaran}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* tombol */}
      <TouchableOpacity
        style={{
         paddingHorizontal: 50,
         paddingVertical: 10,
          backgroundColor: putih,
          borderWidth: 2,
          borderColor: hijau,
          borderRadius: 20,
          // width: '70%',
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <Text style={[stylesDariGaya.TextMediumBold, {alignSelf: 'center'}]}>
          Proses
        </Text>
      </TouchableOpacity>
    </View>
  );
}
// * Prosess====================================================================

function AntrianDiprosesAdmin({navigation}) {
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
function TabKelolaAntrian() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="AntrianTerdaftarAdmin"
      screenOptions={({route}) => ({
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          backgroundColor: hijau,
          height: 100,
          justifyContent: 'flex-end',
        },
        style: {backgroundColor: 'red', marginTop: insets.top},
      })}>
      <Tab.Screen
        name="AntrianTerdaftarAdmin"
        component={AntrianTerdaftarAdmin}
        options={{
          tabBarLabel: 'Terdaftar',
          title: 'Terdaftar',
        }}
      />
      <Tab.Screen
        name="AntrianDiprosesAdmin"
        component={AntrianDiprosesAdmin}
        options={{
          tabBarLabel: 'Proses',
          title: 'Proses',
        }}
      />
    </Tab.Navigator>
  );
}
const KelolaAntrianPage = () => {
  return <TabKelolaAntrian />;
};

export default KelolaAntrianPage;

const styleHalAntrian = StyleSheet.create({
  styleTextAtas: {
    borderLeftWidth: 3,
    borderLeftColor: hijau,
    // justifyContent: '',
    paddingLeft: 10,
  },

  styleContainerText: {flexDirection: 'row', justifyContent: 'space-around'},
  spaceTiap: {marginTop: 10},
});
