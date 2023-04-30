import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import {ipAdress} from '../Components/Url';
import axios from 'axios';
function LayananTerdaftar({navigation}) {
  const [dataAntrian, setDataAntrian] = useState([]);

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
              <View style={stylesDariGaya.listStyle}>
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

export default LayananTerdaftar;
