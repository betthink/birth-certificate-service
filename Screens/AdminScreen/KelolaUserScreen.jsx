import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/ImportedStyles';
import {fotoUrl} from '../../Assets/Url';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
export default function KelolaUserScreen({navigation}) {
  const [dataApi, setDataApi] = useState([]);

  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataUsers.php`;
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => setDataApi(res.data))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getApi();
    console.log('ambil data baruuu');
  }, [getApi()]);
  // *end of code fetch data
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      {/* header */}
      <View
        style={[
          stylesDariGaya.headerBox,
          {justifyContent: 'center', paddingHorizontal: 22},
        ]}>
        <Text style={[stylesDariGaya.TextBold]}>Kelola User</Text>
      </View>
      {/* list Account */}
      <View style={{paddingHorizontal: 22}}>
        <FlatList
          data={dataApi}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProfileUmumScreen', {
                  Id: item.Id,
                  Nama: item.Nama,
                  Password: item.Password,
                  Email: item.Email,
                  NomorTelp: item.NomorTelp,
                  NIK: item.NIK,
                  FotoProfile: item.FotoProfile,
                  StatusLayanan: item.StatusLayanan,
                })
              }>
              <View style={[stylesDariGaya.listStyle]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    size={50}
                    // source={{uri: item.foto}}
                    source={require('../../Assets/Images/album.png')}
                  />

                  <Text style={{marginLeft: 10}}>{item.Id}</Text>
                </View>
                <Text>{item.Nama}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
