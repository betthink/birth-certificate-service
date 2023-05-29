import {View, Button, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MeterialIcon from 'react-native-vector-icons';
import {hijau, ungu} from '../Assets/StylingComponent/Coloring';

const SplashScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const getData = () => {
    
    try {
      const data = AsyncStorage.getItem('userData').then(value => {
        data;
        if (value !== null) {
          const {Level} = JSON.parse(value);
          Level == 'Admin'
            ? navigation.navigate('AdminPageNavigation')
            : navigation.navigate('HomeUmum');
        } else {
          navigation.navigate('Login');
        }
      });
    } catch (error) {}
  };
  const handleButtonPress = () => {
    setIsLoading(true);
    // Perform some asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Simulate a 2 second delay
  };
  useEffect(() => {
    // handleButtonPress();
    getData();
  }, []);
  return (
    <View style={[{backgroundColor: ungu, flex: 1, justifyContent: 'center'}]}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export default SplashScreen;
