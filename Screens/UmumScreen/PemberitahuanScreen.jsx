import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stylesDariGaya} from '../Components/Gayaaja';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import {TouchableOpacity} from 'react-native-gesture-handler';
const PemberitahuanScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      {/* header box */}
      <View style={[stylesDariGaya.headerBox, ,]}>
        {/* xbutton */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 22,
            paddingVertical: 22,
          }}>
          <MaterialIcon
            style={{color: '#fff'}}
            name={'keyboard-arrow-left'}
            size={30}
          />
          <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>
            Pemberitahuan
          </Text>
        </TouchableOpacity>
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
              Belum ada pemberitahuan terkait layanan
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PemberitahuanScreen;
