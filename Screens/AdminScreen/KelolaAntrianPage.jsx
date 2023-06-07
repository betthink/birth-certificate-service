import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Button,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/ImportedStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Grey,
  Kuning,
  hijau,
  pinkGelap,
  putih,
  putihGelap,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import BulatanContainer from '../Components/BulatanContainer';
import GreenButton from '../Components/GreenButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createMaterialTopTabNavigator();
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
// const isFocused = useIsFocused();

function KelTerdaftar({}) {
  const [isLoading, setisLoading] = useState(true);
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

        data = data.sort((a, b) => b.IdAntrian - a.IdAntrian);
        setdataAntrianTerdaftar(data);
        console.log(data, 'Ini List antrian Terdaftar  reversed');
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianTerdaftar();
    });

    return reloadPage;
  }, []);
  return (
    <View style={[{flex: 1}]}>
      {isLoading ?(
        <View
          style={[
            {
              backgroundColor: ungu,
              flex: 1000,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (   <>
      {leng >= 1 ? (
        <FlatList
          style={[{marginTop: 20}]}
          data={dataAntrianTerdaftar}
          renderItem={({item}) => (
            <View
              style={[
                {
                  marginHorizontal: 20,
                  backgroundColor: putih,
                  padding: 20,
                  borderLeftWidth: 2,
                  borderColor: ungu,
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
                  navigation.navigate('CekDataPage', {
                    IdAntrian: item.IdAntrian,
                    IdUser: item.IdUser,
                    Nama: item.Nama,
                  })
                }
                style={[{padding: 10, backgroundColor: ungu, height: 50}]}>
                <Text style={[{color: putih}]}>Cek Data</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: ungu,
            },
          ]}>
          <Text style={[{color: putih, fontSize: 16, letterSpacing: 1}]}>
            Tidak ada Antrian
          </Text>
        </View>
      )}</>)}
   
    </View>
  );
}
// antrian valid & diproses
function KelDiproses() {
  const navigation = useNavigation();
  const [IdAdmin, setIdAdmin] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const ambilAsyncStorage = () => {
    AsyncStorage.getItem('userData').then(value => {
      AsyncStorage.getItem('userData');
      const {Id} = JSON.parse(value);
      setIdAdmin(Id);
    });
  };
  const [dataAntrianValid, setdataAntrianValid] = useState();
  const [Jumlah, setJumlah] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const getDataAntrianValid = () => {
    axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.Status == 'Valid');
        setdataAntrianValid(data);
        console.log('Ini jumlah antrian valid yang menunggu', data.length);
        setJumlah(data.length);
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
        console.log();
      })
      .catch(err => console.log(err));
  };

  const sendProsesAntrian = Id => {
    // console.log(Id, 'Ini dari Function Proses Antrian');
    // console.log(IdAdmin, "ini Id admin");
    try {
      const res = axios({
        method: 'POST',
        data: {
          IdAntrian: Id,
          IdAdmin: IdAdmin,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/ProsesAntrian.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value} = res.data;
      console.log(res.data, 'Ini res dari function sendProses');
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
    setRefresh(!refresh);
  };

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
    ambilAsyncStorage();
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianValid();
      getDataAntrianDiproses();
    });

    return reloadPage;
  }, [refresh]);
  return (
    <View style={[{flex: 1}]}>
      {isLoading && (
        <View
          style={[
            {
              backgroundColor: ungu,
              flex: 1000,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      <ScrollView
        contentContainerStyle={[{flex: 1, backgroundColor: putihGelap}]}>
        {/* antrian Valid */}
        <View
          style={[
            {
              marginTop: 10,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text style={[{fontSize: 20}]}>Jumlah Antrian Menunggu:</Text>
          <Text style={[{fontSize: 20}]}>{Jumlah}</Text>
        </View>
        {/* antrian diproses */}
        <View style={[{marginHorizontal: 20, marginTop: 10, flex: 1}]}>
          {Jumlah > 0 ? (
            <GreenButton
              width={'100%'}
              ButtonText={'Proses'}
              actionOnclick={ProsesData}
            />
          ) : (
            <View
              style={[
                {
                  // height: 500,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: ungu,
                },
              ]}>
              <Text>Tidak ada antrian yang perlu di panggil</Text>
            </View>
          )}

          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              },
            ]}></View>
          <FlatList
            contentContainerStyle={[
              {paddingBottom: 170, marginTop: 20, paddingTop: 20},
            ]}
            data={dataAntrianDiproses}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailProsesAntrian', {
                    IdAntrian: item.IdAntrian,
                    Nama: item.Nama,
                    IdAdmin: item.IdAdmin,
                  })
                }
                style={[
                  {
                    // marginHorizontal: 20,
                    elevation: 2,
                    backgroundColor: putih,
                    padding: 20,
                    borderLeftWidth: 2,
                    borderColor: ungu,
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
              </TouchableOpacity>
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
  const [isLoading, setisLoading] = useState(true);
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
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianDitolak();
    });

    return reloadPage;
  }, []);
  return (
    <View style={[{flex: 1}]}>
      {isLoading && (
        <View
          style={[
            {
              backgroundColor: ungu,
              flex: 1000,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      {leng < 1 ? (
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: ungu,
            },
          ]}>
          <Text style={[{fontSize: 16, letterSpacing: 1, color: putih}]}>
            Tidak ada Antrian DItolak
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={[
            {
              marginHorizontal: 20,
              flex: 1,
              // borderWidth: 2,
              // backgroundColor: putih,
            },
          ]}>
          <View style={[{marginTop: 20}]}>
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
                      borderColor: ungu,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 2,
                    },
                  ]}>
                  <View>
                    <View
                      style={[{flexDirection: 'row', alignItems: 'center'}]}>
                      <Text>Nomor Antrian : </Text>
                      <Text style={[{fontWeight: 'bold', fontSize: 20}]}>
                        {item.IdAntrian}
                      </Text>
                    </View>
                    <View
                      style={[{flexDirection: 'row', alignItems: 'center'}]}>
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
        </ScrollView>
      )}
    </View>
  );
}
function DaftarPenerima() {
  const navigation = useNavigation();
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  let [dataAntrianSelesai, setdataAntrianSelesai] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [refresh, setrefresh] = useState(false);
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
        // console.log(data, 'Ini Daftar Penerima');
        setdataAntrianSelesai(data);
      })
      .catch(err => console.log(err));
  };
  // Akta diterima

  const aktaDiterima = async IdAntrian => {
    const formData = new FormData();
    formData.append('IdAntrian', IdAntrian);
    const res = await axios.post(
      `${ipAdress}/aplikasiLayananAkta/update/AktaDiterima.php`,

      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const data = res.data;
    const {value, message} = data;
    // console.log(refresh);
    // console.log(message, "ini massage");
 if(value==1) {
  alert(message)
  setrefresh(!refresh);
  
 } else {
  alert(message)
 }
  };
  useEffect(() => {
    console.log(refresh);
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getDataAntrianSelesai();
    });

    return reloadPage;
  }, [refresh]);
  return (
    <View style={[{flex: 1}]}>
      {isLoading && (
        <View
          style={[
            {
              backgroundColor: ungu,
              flex: 1000,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      {leng < 1 ? (
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: ungu,
            },
          ]}>
          <Text style={[{fontSize: 16, letterSpacing: 1, color: putih}]}>
            Belum ada penerima
          </Text>
        </View>
      ) : (
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
            style={[{marginTop: 20}]}
            data={dataAntrianSelesai}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    // marginHorizontal: 20,
                    backgroundColor: putih,
                    padding: 20,
                    borderLeftWidth: 2,
                    borderColor: ungu,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 2,
                  },
                ]}>
                <View>
                  <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                    <Text>Id Pengambilan : </Text>
                    <Text
                      style={[{fontWeight: 'bold', fontSize: 20, color: ungu}]}>
                      {item.IdPengambilan}
                    </Text>
                  </View>
                  <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                    <Text>Nama anak: </Text>
                    <Text style={[{color: ungu}]}>{item.Nama}</Text>
                  </View>
                  <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                    <Text>ID Antrian: </Text>
                    <Text style={[{color: ungu}]}>{item.IdAntrian}</Text>
                  </View>
                </View>
                {/* <View>
                  <Text>Status</Text>
                  <Text>{item.Status}</Text>
                </View> */}
                <TouchableOpacity
                  style={[
                    {
                      width: 30,
                      borderWidth: 2,
                      borderColor: ungu,
                      borderRadius: 15,
                    },
                  ]}
                  onPress={() => aktaDiterima(item.IdAntrian)}>
                  <MaterialIcons size={25} name="done" />
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      )}
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
          backgroundColor: ungu,
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
