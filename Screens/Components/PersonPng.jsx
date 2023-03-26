import {View, Text, Image} from 'react-native';
import React from 'react';
import Person from '../../Assets/Images/person.png';
const PersonPng = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* Person png */}
      <View
        style={{
          // borderWidth: 2,
          alignItems: 'center',
         marginVertical: 20,
          // height: '60',
          // width: '70%',
          backgroundColor: '#fff',
          elevation: 2,
          
        }}>
        <Image style={{}} source={Person} resizeMode="center" />
      </View>
    </View>
  );
};

export default PersonPng;
