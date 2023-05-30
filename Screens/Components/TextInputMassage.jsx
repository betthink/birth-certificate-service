import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {hijau, putih} from '../../Assets/StylingComponent/Coloring';

const TextInputMassage = ({setValue, valuInput}) => {
  return (
    <View>
      <TextInput
        multiline
        style={[
          {
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderColor: putih,
            flex: 1,
            width: 250 , paddingHorizontal: 20, color: putih
          },
        ]}
        onChangeText={text => setValue(text)}
        value={valuInput}
        placeholderTextColor={putih}
        
        placeholder="Isi pesan disini"
      />
    </View>
  );
};

export default TextInputMassage;
