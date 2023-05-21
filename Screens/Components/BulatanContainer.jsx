import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BulatanContainer = ({bgColor}) => {
  return (
    <View
      style={[
        {width: 20, height: 20, backgroundColor: bgColor, borderRadius: 10},
      ]}
    />
  );
};

export default BulatanContainer;
