import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/ImportedStyles';
// import {TouchableOpacity} from 'react-native-gesture-handler/lib/typescript/components/touchables';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fotoUrl} from '../../Assets/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeAdminScreen = ({navigation}) => {
  const [linkProfile, setlinkProfile] = useState('');
  console.log(linkProfile, 'ini link profile');
  const ambilAsyncStorage = () => {
    AsyncStorage.getItem('userData').then(value => {
      AsyncStorage.getItem('userData');
      const {FotoProfile} = JSON.parse(value);
      setlinkProfile(FotoProfile);
    });
  };

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
          <View style={{padding: 2, backgroundColor: '#fff', borderRadius: 30}}>
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
    </View>
  );
};

export default HomeAdminScreen;
