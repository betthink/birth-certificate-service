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

const HomeAdminScreen = ({navigation}) => {
  const [linkProfile, setlinkProfile] = useState(null);
  // console.log(linkProfile, 'ini link profile');
  const ambilAsyncStorage = () => {
    AsyncStorage.getItem('userData').then(value => {
      AsyncStorage.getItem('userData');
      const {FotoProfile} = JSON.parse(value);
      setlinkProfile(FotoProfile);
      console.log(FotoProfile, "Ini Url fotoProfile")
    });
  };
  const data = [
    {
      name: 'Terdaftar',
      population: 50,
      color: '#FF5733',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: 'Diproses',
      population: 50,
      color: '#581845',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: 'Ditolak',
      population: 50,
      color: '#C70039',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: 'Selesai',
      population: 50,
      color: 'green',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
  
  ];

  const colors = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'];

  useEffect(() => {
    ambilAsyncStorage();
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
            <Text style={[stylesDariGaya.TextMediumBold, {color: putih}]}>
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
      <View style={[{justifyContent: 'center', alignItems: 'center', backgroundColor: hijau, flex: 1}]}>
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
