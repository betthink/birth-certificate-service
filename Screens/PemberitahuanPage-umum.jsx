import {View, Text, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stylesDariGaya} from './Components/ImportedStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ButtonBack from './Components/ButtonBack';
import axios from 'axios';
import { ipAdress } from './Components/Url';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const PemberitahuanScreen = ({navigation, route}) => {
  const {Id} = route.params;
  const [dataPemberitahuan, setataPemberitahuan] = useState('');
// getPemberitahuan
const getPemberitahuan = async()=> {
  try {
    const result = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataUsers.php`,
    
    }) 
  
    const data = result.data;
  const  datafilter = data.filter(d => d.Id == Id);
  console.log(datafilter);
  setataPemberitahuan(datafilter[0].Pemberitahuan);
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=> {
  getPemberitahuan()
},[])
  return (
    <SafeAreaView>
      {/* header box */}
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Pemberitahuann'} />
      </View>
      {/* pemberitahuan */}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 300,
            borderWidth: 2,
            height: 350,
            borderColor: '#24CE9E',
            marginTop: 42,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcon
            name={'watch-later'}
            size={100}
            style={{position: 'absolute', top: 20}}
          />
          <View
            style={{
              width: 230,
              height: 183,
              backgroundColor: '#28AFB0',
              borderLeftWidth: 2,
              borderColor: '#D65BD1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>
             {dataPemberitahuan} {Id}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PemberitahuanScreen;
