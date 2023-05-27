import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {hijau} from '../../Assets/StylingComponent/Coloring';

const TextInputMassage = ({setValue, valuInput}) => {
  return (
    <View>
      <TextInput
        multiline
        style={[
          {
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderColor: hijau,
            flex: 1,
            width: 250
          },
        ]}
        onChangeText={text => setValue(text)}
        value={valuInput}
        placeholder="Isi pesan disini"
      />
    </View>
  );
};

export default TextInputMassage;
