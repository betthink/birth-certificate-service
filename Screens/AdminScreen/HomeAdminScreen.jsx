import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  hijau,
  putih,
  putihGelap,
  ungu,
} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/ImportedStyles';
// import {TouchableOpacity} from 'react-native-gesture-handler/lib/typescript/components/touchables';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fotoUrl} from '../../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PieChart} from 'react-native-chart-kit';
import axios from 'axios';
import {ipAdress} from '../Components/Url';

const HomeAdminScreen = ({navigation}) => {
  const [linkProfile, setlinkProfile] = useState(null);
  // console.log(linkProfile, 'ini link profile');
  const ambilAsyncStorage = () => {
    AsyncStorage.getItem('userData').then(value => {
      AsyncStorage.getItem('userData');
      const {FotoProfile} = JSON.parse(value);
      setlinkProfile(FotoProfile);
      console.log(FotoProfile, 'Ini Url fotoProfile');
    });
  };
  // function getDataAntrian
  const [totalDataTerdaftar, settotalDataTerdaftar] = useState(null);
  const [totalDataValid, settotalDataValid] = useState(null);
  const [totalDataDiproses, settotalDataDiproses] = useState(null);
  const [totalDataDitolak, settotalDataDitolak] = useState(null);
  const [totalDataSelesai, settotalDataSelesai] = useState(null);
  const getJumlahDataAntrian = () => {
    axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataAntrianJoinDataBayi.php`,
    })
      .then(res => {
        const data = res.data;
        const dataTerdaftar = data.filter(d => d.Status == 'Terdaftar');
        const dataValid = data.filter(d => d.Status == 'Valid');
        const dataDiproses = data.filter(d => d.Status == 'Diproses');
        const dataDitolak = data.filter(d => d.Status == 'Ditolak');
        const dataSelesai = data.filter(d => d.Status == 'Selesai');
        settotalDataTerdaftar(dataTerdaftar.length);
        settotalDataValid(dataValid.length);
        settotalDataDiproses(dataDiproses.length);
        settotalDataDitolak(dataDitolak.length);
        settotalDataSelesai(dataSelesai.length);
      })
      .catch(err => console.log(err));
  };
  // data
  const data = [
    {
      name: 'Terdaftar',
      population: totalDataTerdaftar,
      color: '#FF5733',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: 'Valid',
      population: totalDataValid,
      color: 'purple',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: 'Diproses',
      population: totalDataDiproses,
      color: '#581845',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: 'Ditolak',
      population: totalDataDitolak,
      color: '#C70039',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: 'Selesai',
      population: totalDataSelesai,
      color: 'green',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
  ];

  // const colors = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'];

  useEffect(() => {
    ambilAsyncStorage();
    const reloadPage = navigation.addListener('focus', () => {
      // Fungsi yang ingin Anda jalankan ketika masuk ke halaman ini
      getJumlahDataAntrian();
    });

    return reloadPage;
    
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      <View
        style={[
          stylesDariGaya.headerBox,
          {paddingHorizontal: 22, justifyContent: 'center'},
        ]}>
        {/* textt */}
        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
          <View>
            <Text style={[stylesDariGaya.TextMediumBold,] }>
              Selamat datang Admin
            </Text>
            <Text style={[stylesDariGaya.TextBold]}>Username!</Text>
          </View>
          {/* fotoProfile */}
          <View style={{padding: 2, backgroundColor: hijau, borderRadius: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileAdminScreen')}>
              <Image
                style={[stylesDariGaya.fotoProfile]}
                // source={require('../../Assets/Images/album.png')}
                source={{
                  uri: linkProfile,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: hijau,
            flex: 1,
          },
        ]}>
        <PieChart
          data={data}
          width={Dimensions.get('window').width - 50} // from react-native
          height={220}
          chartConfig={{
            color: (opacity = 1) => `white`,
            labelColor: (opacity = 1) => `white`,
            style: {
              // borderRadius: 16,
            },
          }}
          backgroundColor={ungu}
          accessor="population"
          paddingLeft="15"
          absolute
          style={{
            // marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default HomeAdminScreen;
