import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/ImportedStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  hijau,
  pinkGelap,
  putih,
  putihGelap,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import BulatanContainer from '../Components/BulatanContainer';
import GreenButton from '../Components/GreenButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createMaterialTopTabNavigator();
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
// const isFocused = useIsFocused();

function KelTerdaftar({}) {
  const navigation = useNavigation();
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  let [dataAntrianTerdaftar, setdataAntrianTerdaftar] = useState();
  let [leng, setLeng] = useState(0);
  const getDataAntrianTerdaftar = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Terdaftar');
        // console.log(data, "ini data antrian terdaftar");
        setLeng(data.length);
        setdataAntrianTerdaftar(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianTerdaftar();
    });

    return reloadPage;
  }, []);
  return (
    <View>
      {leng >= 1 ? (
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

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailDataAntrian', {
                    IdAntrian: item.IdAntrian,
                  })
                }
                style={[{padding: 10, backgroundColor: hijau, height: 50}]}>
                <Text>Cek Data</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
          <Text>Tidak ada data</Text>
        </View>
      )}
    </View>
  );
}
// antrian valid & diproses
function KelDiproses() {
  const navigation = useNavigation();
  const [IdAdmin, setIdAdmin] = useState(null);
  const ambilAsyncStorage = () => {
    AsyncStorage.getItem('userData').then(value => {
      AsyncStorage.getItem('userData');
      const {Id} = JSON.parse(value);
      setIdAdmin(Id);
    });
  };
  const [dataAntrianValid, setdataAntrianValid] = useState();
  const getDataAntrianValid = () => {
    axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Valid');
        setdataAntrianValid(data);
      })
      .catch(err => console.log(err));
  };
  const [dataAntrianDiproses, setdataAntrianDiproses] = useState();
  const getDataAntrianDiproses = () => {
    axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Diproses');
        // console.log(data, "ini data antrian terdaftar");
        // setLeng(data.length);
        setdataAntrianDiproses(data);
      })
      .catch(err => console.log(err));
  };

  // const [IdSelected, setIdSelected] = useState(null);

  // const ambilAntrianTerbaru = async () => {
  //   // Mengurutkan data berdasarkan IdAntrian secara ascending
  //   const sortedData = [...dataAntrianValid].sort(
  //     (a, b) => a.IdAntrian - b.IdAntrian,
  //   );

  //   // Memilih data dengan IdAntrian paling rendah
  //   // const selected = sortedData[0];
  //   const selectId = sortedData[0].IdAntrian;
  //   // console.log(selected, 'ini Id antrian terendah');
  //   console.log(selectId, 'Ini Id di set');
  //   setIdSelected(selectId);
  //   await new Promise(resolve => setTimeout(resolve, 2000));
  // };
  const sendProsesAntrian = (Id) => {
    // console.log(Id, 'Ini dari Function Proses Antrian');
    // console.log(IdAdmin, "ini Id admin");
    try {
      const res = axios({
        method: 'POST',
        data: {
          IdAntrian: Id,
          IdAdmin : IdAdmin,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/ProsesAntrian.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value} = res.data;
      console.log(res.data, "Ini res dari function sendProses");
      if (value == 1) {
        alert('antrian Sudah Diproses');
       
      } else {
        alert('gagal memproses antrian');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ProsesData = () => {
    const Id = Object(
      dataAntrianValid
        .sort((a, b) => a.IdAntrian - b.IdAntrian)
        .find((v, i) => i == 0),
    ).IdAntrian;
    // console.log(Id, 'Ini data sorted');
    // await ambilAntrianTerbaru();
    sendProsesAntrian(Id);
  };

  useEffect(() => {
    ambilAsyncStorage();
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianValid();
      getDataAntrianDiproses();
    });

    return reloadPage;
  }, []);
  return (
    <View style={[{flex: 1}]}>
      <ScrollView contentContainerStyle={[{flex: 1, backgroundColor: putih}]}>
        {/* antrian Valid */}
        <View style={[{marginHorizontal: 20, flex: 2}]}>
          <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
            <Text>Antrian Valid</Text>
            <Text>Admin {IdAdmin}</Text>
          </View>
          <FlatList
            data={dataAntrianValid}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    elevation: 2,
                    // marginHorizontal: 20,
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
          <GreenButton
            ButtonText={'Proses antrian'}
            actionOnclick={ProsesData}
          />
        </View>
        {/* antrian diproses */}
        <View style={[{marginHorizontal: 20, marginTop: 10, flex: 1}]}>
          <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
            <Text>Antrian Diproses</Text>
          </View>
          <FlatList
            data={dataAntrianDiproses}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    // marginHorizontal: 20,
                    elevation: 2,
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
                  <Text>Admin</Text>
                  <Text>{item.IdAdmin}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function KelDitolak() {
  const navigation = useNavigation();
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  let [dataAntrianDitolak, setdataAntrianDitolak] = useState();
  let [leng, setLeng] = useState(0);
  const getDataAntrianDitolak = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Ditolak');
        // console.log(data, "ini data antrian terdaftar");
        setLeng(data.length);
        setdataAntrianDitolak(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianDitolak();
    });

    return reloadPage;
  }, []);
  return (
    <View style={[{flex: 1}]}>
      <ScrollView
        contentContainerStyle={[
          {
            marginHorizontal: 20,
            flex: 1,
            // borderWidth: 2,
            // backgroundColor: putih,
          },
        ]}>
        <FlatList
          data={dataAntrianDitolak}
          renderItem={({item}) => (
            <View
              style={[
                {
                  // marginHorizontal: 20,
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
      </ScrollView>
    </View>
  );
}
function DaftarPenerima() {
  const navigation = useNavigation();
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  let [dataAntrianSelesai, setdataAntrianSelesai] = useState();
  let [leng, setLeng] = useState(0);
  const getDataAntrianSelesai = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Selesai');
        // console.log(data, "ini data antrian terdaftar");
        setLeng(data.length);
        setdataAntrianSelesai(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianSelesai();
    });

    return reloadPage;
  }, []);
  return (
    <View style={[{flex: 1}]}>
      <ScrollView
        contentContainerStyle={[
          {
            marginHorizontal: 20,
            flex: 1,
            // borderWidth: 2,
            // backgroundColor: putih,
          },
        ]}>
        <FlatList
          data={dataAntrianSelesai}
          renderItem={({item}) => (
            <View
              style={[
                {
                  // marginHorizontal: 20,
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
      </ScrollView>
    </View>
  );
}

function KelolaAntrianPage() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="LayananTerdaftar"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: ungu,
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 12,

          color: putih,
        },
        tabBarStyle: {
          backgroundColor: hijau,
          height: 70,
          justifyContent: 'flex-end',
        },

        style: {backgroundColor: 'red', marginTop: insets.top},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'LayananTerdaftar':
              iconName = focused ? 'home-circle' : 'home-circle-outline';
              break;
            case 'LayananDiproses':
              iconName = focused ? 'history' : 'history';
              break;
            case 'KelDitolak':
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
              break;
            case 'DaftarPenerima':
              iconName = focused ? 'view-list' : 'view-list';
              break;
            default:
              break;
          }
          // const {width} = Dimensions.get('window');
          return (
            <MaterialCommunityIcons name={iconName} size={26} color={putih} />
          );
        },
      })}>
      <Tab.Screen
        name="LayananTerdaftar"
        component={KelTerdaftar}
        options={{
          tabBarLabel: 'Terdaftar',
          title: 'Terdaftar',
        }}
      />
      <Tab.Screen
        name="LayananDiproses"
        component={KelDiproses}
        options={{
          tabBarLabel: 'Proses',
          title: 'Proses',
        }}
      />
      <Tab.Screen
        name="KelDitolak"
        component={KelDitolak}
        options={{
          tabBarLabel: 'Ditolak',
          title: 'Ditolak',
        }}
      />
      <Tab.Screen
        name="DaftarPenerima"
        component={DaftarPenerima}
        options={{
          tabBarLabel: 'Penerima',
          title: 'Penerima',
        }}
      />
    </Tab.Navigator>
  );
}
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
