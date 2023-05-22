import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {stylesDariGaya} from './ImportedStyles';
import {hijau, putih} from '../../Assets/StylingComponent/Coloring';

const GreenButton = ({ButtonText, actionOnclick, width}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: hijau,
          width: width,
          padding: 20,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
      ]}
      onPress={actionOnclick}>
      <Text style={[{color: putih}]}>{ButtonText}</Text>
    </TouchableOpacity>
  );
};

export default GreenButton;
