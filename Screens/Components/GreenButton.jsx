import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {stylesDariGaya} from './ImportedStyles';
import {hijau, putih, ungu} from '../../Assets/StylingComponent/Coloring';

const GreenButton = ({ButtonText, actionOnclick, width}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: ungu,
          width: width,
          padding: 20,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 10
        },
      ]}
      onPress={actionOnclick}>
      <Text style={[{color: putih}]}>{ButtonText}</Text>
    </TouchableOpacity>
  );
};

export default GreenButton;
