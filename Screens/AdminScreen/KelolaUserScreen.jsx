import {View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {hijau, putih, putihGelap, ungu} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/ImportedStyles';
import {fotoUrl} from '../../Assets/Url';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
export default function KelolaUserScreen({navigation}) {
  const [dataApi, setDataApi] = useState([]);
  const [isloading, setisloading] = useState(true);

  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataUsers.php`;
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        console.log(res.data, "INi res di kelola user")
        setDataApi(res.data)})
      .catch(err => console.log(err));
  };
  useEffect(() => {
setTimeout(()=> {
  setisloading(false)
}, 1000)
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getApi();
   
    });

    return reloadPage;
  }, []);
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
      {isloading ? ( <View
          style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
          <ActivityIndicator size="large" color={ungu} />
        </View>) : (  <View style={{paddingHorizontal: 22}}>
        <FlatList
        style={[{marginTop: 20}]}
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
                  Level: 'Admin',
                })
              }>
              <View style={[stylesDariGaya.listStyle]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    size={50}
                    // source={{uri: item.foto}}
                    style={[{resizeMode: 'cover', width: 50, height: 50, borderRadius: 25}]}
                    source={{ uri: `${ipAdress}/aplikasiLayananAkta/uploads/FotoProfile/${item.NIK}/${item.FotoProfile}`}}
                    // source={require('../../Assets/Images/album.png')}
                    
                  />

                  <Text style={{marginLeft: 10}}>{item.Id}</Text>
                </View>
                <Text>{item.Nama}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>)}
      {/* list Account */}
    
    </View>
  );
}
