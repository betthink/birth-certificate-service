import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { hijau, ungu } from '../../Assets/StylingComponent/Coloring';

const DefaultButtonBox = ({Title, onClickAction, TitleColor}) => {
  return (
    <TouchableOpacity
      onPress={onClickAction}
      style={[
        {
          height: 50,
          marginVertical: 20,
          backgroundColor: hijau,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <Text style={[{color: '#fff'}]}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButtonBox;
