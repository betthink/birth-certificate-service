import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  hijau,
  hitam,
  putih,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/ImportedStyles';
import {ipAdress} from '../Components/Url';
import axios from 'axios';

export default function KelolaRiwayatAntrianScreen({navigation}) {
  // * Fetch data from tabel userUmum
  // * Fungsi tampilkan data user by id
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`;
  const [dataAntrian, setDataAntrian] = useState();
  const [isloading, setisloading] = useState(true);
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        let data = res.data;
        // console.log(data, "ini data riwayat");
        data = data.filter(d => d.Status == 'Diterima');
        console.log(data, 'ini data antrian riwayat');
        setDataAntrian(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 1000);
    // ambilAsyncStorage();
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getApi();
    });

    return reloadPage;
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: putih}}>
      {/* header */}
      <View
        style={[
          stylesDariGaya.headerBox,
          {justifyContent: 'center', paddingHorizontal: 22},
        ]}>
        <Text style={[stylesDariGaya.TextMediumBold]}>Riwayat Antrian</Text>
      </View>
      {/* list */}
      {isloading ? (
        <View
          style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
          <ActivityIndicator size="large" color={ungu} />
        </View>
      ) : (
        <View style={{paddingHorizontal: 22}}>
          <FlatList
            data={dataAntrian}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailAntrian', {detailAntrian: item})
                }
                style={{
                  height: 70,
                  borderLeftWidth: 3,
                  borderBottomWidth: 2,
                  borderLeftColor: ungu,
                  marginTop: 20,
                  borderBottomColor: 'grey',
                  paddingHorizontal: 10,
                  // flexDirection: 'row',
                  justifyContent: 'center',
                  // alignItems: 'center'
                }}>
                <Text style={{fontSize: 18}}>{item.id}</Text>
                <View
                  style={[
                    {flexDirection: 'row', justifyContent: 'space-between'},
                  ]}>
                  <Text>Id Antrian : </Text>
                  <Text style={{textAlign: 'right', color: hitam}}>
                    {item.IdAntrian}
                  </Text>
                </View>
                <View
                  style={[
                    {flexDirection: 'row', justifyContent: 'space-between'},
                  ]}>
                  <Text>Waktu Pendaftaran</Text>
                  <Text style={{color: ungu}}>{item.WaktuPendaftaran} </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}
