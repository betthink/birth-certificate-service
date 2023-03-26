import {View, Text, Image} from 'react-native';
import React from 'react';
import Awan from '../../Assets/Images/shape.png';

const HeaderCloud = () => {
  return (
    <View>
      <Image style={{marginTop: -20}} source={Awan} resizeMode="contain" />
    </View>
  );
};

export default HeaderCloud;
