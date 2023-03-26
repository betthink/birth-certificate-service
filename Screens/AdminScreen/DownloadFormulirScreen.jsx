import {View, Text} from 'react-native';
import React from 'react';
import {stylesDariGaya} from '../Components/Gayaaja';
import {hijau, hitam} from '../../Assets/StylingComponent/Coloring';

const DownloadFormulirScreen = () => {
  return (
    <View>
      <View style={[stylesDariGaya.headerBox]}>
        <Text> Upload Formulir</Text>
      </View>
      <View>
        <View style={[stylesDariGaya.listStyle]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>jjv</Text>

            <Text style={{marginLeft: 10}}>Formulir</Text>
          </View>
          <Text>dvsdb</Text>
        </View>
       
        {/* button */}

        <View style={[stylesDariGaya.listStyle]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>jjv</Text>

            <Text style={{marginLeft: 10}}>Formulir</Text>
          </View>
          <Text>dvsdb</Text>
        </View>
      </View>
    </View>
  );
};

export default DownloadFormulirScreen;
