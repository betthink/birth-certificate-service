import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {stylesDariGaya} from './ImportedStyles';
import { putih } from '../../Assets/StylingComponent/Coloring';

const GreenButton = ({ButtonText, actionOnclick}) => {
  return (
  
      <TouchableOpacity
        style={[
          stylesDariGaya.Tombols,
          {
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          },
        ]}>
        onPress={actionOnclick}
        <Text style={[{color: putih}]}>{ButtonText}</Text>
      </TouchableOpacity>
  
  );
};

export default GreenButton;
