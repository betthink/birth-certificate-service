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
const Tab = createMaterialTopTabNavigator();

function KelTerdaftar({navigation}) {
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
    getDataAntrianTerdaftar();
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
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  flex: 1,
                  height: 70,
                  backgroundColor: putih,
                  elevation: 2,
                  marginVertical: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <View>
                {/* <Text style={[{color: 'white', fontSize: 20}]}>Nama:</Text> */}
                <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                  <BulatanContainer bgColor={ungu} />
                  <Text style={[{fontSize: 20, marginLeft: 20}]}>
                    {item.Nama}
                  </Text>
                </View>
                <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                  <BulatanContainer bgColor={pinkGelap} />
                  <Text style={[{fontSize: 20, marginLeft: 20}]}>
                    {item.IdAntrian}
                  </Text>
                </View>
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
        <View>
          <Text>Tidak ada data</Text>
        </View>
      )}
    </View>
  );
}
function KelDiproses() {
  return (
    <View>
      <Text>Antrian Diproses</Text>
    </View>
  );
}
function KelDitolak() {
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
    getDataAntrianDitolak();
  }, []);
  return (
    <View>
      <FlatList
        data={dataAntrianDitolak}
        renderItem={({item}) => (
          <View style={[{padding: 20, backgroundColor: ungu}]}>
            <Text>{item.IdUser}</Text>
            <Text>{item.WaktuDitolak}</Text>
            <Text>{item.Nama}</Text>
          </View>
        )}
      />
    </View>
  );
}
function DaftarPenerima() {
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
    getDataAntrianSelesai();
  }, []);
  return (
    <View>
      <FlatList
        data={dataAntrianSelesai}
        renderItem={({item}) => (
          <View
            style={[{backgroundColor: ungu, height: 50, marginVertical: 2}]}>
            <Text>{item.WaktuSelesai}</Text>
            <Text>{item.IdPengambilan}</Text>
          </View>
        )}
      />
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
