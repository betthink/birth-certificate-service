import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Person from '../Assets/Images/person.png';
import {stylesDariGaya} from './Components/Gayaaja';
import PersonPng from './Components/PersonPng';
import MenuUmum from './Components/MenuUmum';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}> */}
      <View style={stylesDariGaya.headerBox}>
        {/* wrapp all content di box */}
        <View style={{paddingHorizontal: 22, paddingTop: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* wrap Text Header */}
            <View>
              <View>
                <Text
                  style={[
                    stylesDariGaya.TextBold,
                    {color: '#fff', fontSize: 20, letterSpacing: 3},
                  ]}>
                  Selamat Datang
                </Text>
              </View>
              <View style={{width: 300}}>
                <Text style={{color: '#fff'}}>
                  Gunakan Layanan Kami dengan Bijak dan beratnggung jawab!
                </Text>
              </View>
            </View>
            {/* wrap Icons */}
          </View>
        </View>
      </View>
      {/* wrap content in below box */}
      <View style={{paddingHorizontal: 22}}>
        {/* Person png */}
        <PersonPng />
        {/* Menu */}
        {/* <MenuUmum /> */}
      <MenuUmum />
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Home;
