import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  const getData = () => {
    try {
      const data = AsyncStorage.getItem('userData').then(value => {
        data;
        if (value !== null) {
          navigation.navigate('HomeUmum');
        } else {
          navigation.navigate('Login');
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
      {/* <ActivityIndicator animating={animating} color={'#fff'} size="large" /> */}
      <Text>Tunggu</Text>
    </View>
  );
};

export default SplashScreen;
