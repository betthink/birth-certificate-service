import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {Grey, hijau, putih, ungu} from '../Assets/StylingComponent/Coloring';
import {ipAdress} from './Components/Url';
import axios from 'axios';
import ButtonBack from './Components/ButtonBack';
import {stylesDariGaya} from './Components/ImportedStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const ListFormulir = ({navigation, route}) => {
  const {IdUser} = route.params;
  const [data, setData] = useState(null);
  const [lengdata, setlengdata] = useState(null);
  const url = ` ${ipAdress}/aplikasiLayananAkta/api/apiDataBayi.php`;
  const getApi = () => {
    axios({
      method: 'POST',
      url: `${url}`,
    })
      .then(res => {
        // console.log(res.data.filter((val)=>IdUser==val.IdUser));
        let data;
        data = res.data.filter(val => IdUser == val.IdUser);
        console.log(data.length, 'Data');
        data = data.length;
        setlengdata(data);

        setData(res.data.filter(val => IdUser == val.IdUser));
      })
      .catch(err => console.log(err));
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FormulirScreen', {
          IdAntrian: item.IdAnak,
        })
      }
      style={{
        padding: 10,
        backgroundColor: ungu,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
        <AntDesign color={putih} name="folderopen" size={40} />
        {/* <Text>{item.IdAnak}</Text> */}
        <Text style={[{marginLeft: 20, color: putih}]}>{item.Nama}</Text>
      </View>
      {/* <AntDesign color={putih} name="folderopen" size={30} /> */}
    </TouchableOpacity>
  );
  useEffect(() => {
    getApi();
    // console.log(data);
    // console.log(IdUser);
  }, []);
  return (
    <View style={[{flex: 1, backgroundColor: putih}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'List Formulir'} />
      </View>
      {lengdata == 0 ? (
        <ImageBackground resizeMode='center' source={require('../Assets/Images/fillFormulir.png')} style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={[{fontWeight: '700', fontSize: 17, padding: 10, backgroundColor: Grey}]}>Belum ada formulir</Text>
        </ImageBackground>
      ) : (
        <>
          {data == null ? (
            <View
              style={[
                {
                  backgroundColor: ungu,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 20,
                },
              ]}>
              <Text>Belum ada data</Text>
            </View>
          ) : (
            <View
              style={[
                {paddingHorizontal: 20, marginTop: 20, marginBottom: 20},
              ]}>
              <FlatList
                contentContainerStyle={[{paddingBottom: 80}]}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.IdAnak}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default ListFormulir;
