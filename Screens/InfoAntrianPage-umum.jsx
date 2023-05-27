import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { FlatList } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {ipAdress} from './Components/Url';
import axios from 'axios';
import {hijau, putih, putihGelap, ungu} from '../Assets/StylingComponent/Coloring';
import pngQueue from '../Assets/Images/ReadingInformation.png';
// import { Image } from 'react-native-svg';

// import AntrianDitolak from './StatusScreen/AntrianDitolak';
// const Tab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
// color=====================
const colorPink = '#B930B4';
const colorHijau = '#28AFB0';
const colorKuning = '#F7CD1C';
const colorUngu = '#2E0FEF';
function AntrianLayananScreen({navigation}) {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        headerLeft: () => (
          <TouchableOpacity
            style={[{flexDirection: 'row'}]}
            onPress={() => navigation.navigate('HomeUmum')}>
            <MaterialIcon />
            <EntypoIcon name="chevron-small-left" size={24} />
            <Text style={{fontSize: 16}}>Kembali</Text>
          </TouchableOpacity>
        ),
        // headerShown: false
        // tabBarItemStyle: {width: "100%"},

        tabBarStyle: {backgroundColor: '#fff'},
        // style: {backgroundColor: 'red', marginTop: insets.top,},
      }}>
      <Tab.Screen
        name="AntrianTerdaftar"
        component={AntrianTerdaftar}
        options={{
          // tabBarLabel: ({ color, focused }) => (
          //   <Text style={{ color: focused ? 'blue' : 'black' }}>tesss</Text>
          // ),
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? hijau : 'grey'}
                name="schedule"
                size={25}
              />
              {focused ? (
                <Text style={[{color: hijau}]}>Terdaftar</Text>
              ) : (
                <Text style={[{color: 'grey'}]}>Terdaftar</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AntrianDiproses"
        component={AntrianDiproses}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? hijau : 'grey'}
                name="queue"
                size={25}
              />
              {focused ? (
                <Text style={[{color: hijau}]}>Diproses</Text>
              ) : (
                <Text style={[{color: 'grey'}]}>Diproses</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AntrianDitolak"
        component={AntrianDitolak}
        options={{
          title: ({color, focused}) => (
            <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
              <MaterialIcon
                color={focused ? hijau : 'grey'}
                name="clear"
                size={25}
              />
              {focused ? (
                <Text style={[{color: hijau}]}>Ditolak</Text>
              ) : (
                <Text style={[{color: 'grey'}]}>Ditolak</Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default AntrianLayananScreen;
// ? funtion tampilkan antrian terdaftar
function AntrianTerdaftar({navigation}) {
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  let [dataAntrianTerdaftar, setdataAntrianTerdaftar] = useState();
  let [leng, setLeng] = useState(0);
  const getApiTerdaftar = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Terdaftar' || 'Valid');
        // console.log(data, "ini data antrian terdaftar");
        setLeng(data.length);
        setdataAntrianTerdaftar(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getApiTerdaftar();
    });

    return reloadPage;
    // console.log(dataAntrian.length, 'ambil data Antrian terdaftar');
  }, []);

  return (
    <View style={[{flex: 1, justifyContent: 'center'}]}>
      {leng < 1 ? (
        <View
          style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'center',
              paddingVertical: 80,
              backgroundColor: hijau,
              marginBottom: 10,
            }}
            source={pngQueue}
            resizeMode="contain"
          />
          <View style={[{flex: 1}]}>
            <Text style={[{fontSize: 20}]}>Ini value kurang dari 1 </Text>
          </View>
        </View>
      ) : (
        <View style={[{flex: 1}]}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'center',
              paddingVertical: 80,
              backgroundColor: hijau,
              marginBottom: 10,
            }}
            source={pngQueue}
            resizeMode="contain"
          />
          <FlatList
            data={dataAntrianTerdaftar}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    marginHorizontal: 20,
                    backgroundColor: putih,
                    padding: 20,
                    borderLeftWidth: 2,
                    borderColor: hijau,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 2,
                  },
                ]}>
                <View>
                  <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                    <Text>Nomor Antrian : </Text>
                    <Text style={[{fontWeight: 'bold', fontSize: 20}]}>
                      {item.IdAntrian}
                    </Text>
                  </View>
                  <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                    <Text>Nama anak: </Text>
                    <Text>{item.Nama}</Text>
                  </View>
                </View>
                <View>
                  <Text>Status</Text>
                  <Text>{item.Status}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
// ? funtion tampilkan antrian diproses
function AntrianDiproses({navigation}) {
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  const [dataAntrian, setDataAntrian] = useState();
  let [value, setValue] = useState(0);
  const getApiDiproses = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Diproses');
        // console.log(data, "ini data antrian Diproses");
        setDataAntrian(data);
        setValue(data.length);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getApiDiproses();
    });

    return reloadPage;
  }, []);
  return (
    // {dataAntrian.length < 1 ()}
    <View style={[{flex: 1}]}>
      {value < 1 ? (
        <ImageBackground
          source={require(`../Assets/Images/Sleeping.png`)}
          style={[{flex: 1, resizeMode: 'cover'}]}>
          <View style={[{justifyContent: 'center', alignItems: 'center', backgroundColor: hijau, padding: 20 }]}>
            <Text style={[{color: putih, fontSize: 16, fontWeight: 'bold'}]}>Belum ada antrian yang sedang diproses </Text>
          </View>
        </ImageBackground>
      ) : (
        <FlatList
          data={dataAntrian}
          renderItem={({item}) => (
            <View
              style={[
                {
                  marginHorizontal: 20,
                  backgroundColor: putih,
                  padding: 20,
                  borderLeftWidth: 2,
                  borderColor: hijau,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 2,
                },
              ]}>
              <View>
                <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                  <Text>Nomor Antrian : </Text>
                  <Text style={[{fontWeight: 'bold', fontSize: 20}]}>
                    {item.IdAntrian}
                  </Text>
                </View>
                <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                  <Text>Nama anak: </Text>
                  <Text>{item.Nama}</Text>
                </View>
              </View>
              <View>
                <Text>Status</Text>
                <Text>{item.Status}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
// ? funtion tampilkan antrian ditolak
const AntrianDitolak = ({navigation}) => {
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  const [dataAntrian, setDataAntrian] = useState();
  let [lengt, setLengt] = useState(0);
  const getApiDitolak = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Ditolak');
        // console.log(data, "ini data antrian Diproses");
        setDataAntrian(data);
        setLengt(data.length);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getApiDitolak();
    });

    return reloadPage;
  }, []);

  return (
    <View style={[{flex: 1}]}>
      {lengt < 1 ? (
        <View
          style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text>Belum ada antrian ditolak</Text>
        </View>
      ) : (
        <FlatList
          data={dataAntrian}
          renderItem={({item}) => (
            <View
              style={[
                {
                  marginHorizontal: 20,
                  backgroundColor: putih,
                  padding: 20,
                  borderLeftWidth: 2,
                  borderColor: hijau,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 2,
                },
              ]}>
              <View>
                <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                  <Text>Nomor Antrian : </Text>
                  <Text style={[{fontWeight: 'bold', fontSize: 20}]}>
                    {item.IdAntrian}
                  </Text>
                </View>
                <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                  <Text>Nama anak: </Text>
                  <Text>{item.Nama}</Text>
                </View>
              </View>
              <View>
                <Text>Status</Text>
                <Text>{item.Status}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

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
  containerInfoWithColor: {
    flexDirection: 'row',
    // backgroundColor: 'lavender',
    alignItems: 'center',
  },
});
