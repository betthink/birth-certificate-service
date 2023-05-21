import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React , {useState, useEffect} from 'react';
import {
  hijau,
  hitam,
  putih,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/ImportedStyles';
import { ipAdress } from '../Components/Url';
import axios from 'axios';

export default function KelolaRiwayatAntrianScreen({navigation}) {

   // * Fetch data from tabel userUmum
  // * Fungsi tampilkan data user by id
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
      data = data.filter(d=> d.Status == "Selesai")
      // console.log(data, "ini data antrian Diproses");
      setDataAntrian(data)})
     .catch(err => console.log(err)); 
  };
  useEffect(() => {
  
    getApi();
    console.log("ambil data Antrian Selesai");
   }, [getApi()]);
  return (
    <View style={{flex: 1, backgroundColor: putih}}>
      {/* header */}
      <View
        style={[
          stylesDariGaya.headerBox,
          {justifyContent: 'center', paddingHorizontal: 22},
        ]}>
        <Text style={[stylesDariGaya.TextMediumBold,]}>
          Riwayat Antrian
        </Text>
      </View>
      {/* list */}
      <View style={{paddingHorizontal: 22}}>
        <FlatList
          data={dataAntrian}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>navigation.navigate('DetailAntrian', {detailAntrian:item})}
              style={{
                height: 70,
                borderLeftWidth: 3,
                borderBottomWidth: 2,
                borderLeftColor: hijau,
                marginTop: 20,
                borderBottomColor: 'grey',
                paddingHorizontal: 10,
                flexDirection: 'row', justifyContent: 'space-between'
              }}>
              <Text style={{fontSize: 18}}>{item.id}</Text>
              <View>
                <Text style={{textAlign: 'right', color: hitam}}>{item.IdAntrian} Id</Text>
                <Text style={{color: hijau}}>{item.WaktuPendaftaran} oyy</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
