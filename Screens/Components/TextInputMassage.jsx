import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Grey, greenTea, hijau, hitam, putih} from '../../Assets/StylingComponent/Coloring';

const TextInputMassage = ({setValue, valuInput}) => {
  return (
    <View style={[{flex: 1}]}>
      <TextInput
        multiline
        style={[
          {
            // borderBottomWidth: 2,
            // borderLeftWidth: 2,
            // borderColor: putih,
            flex: 1,
            paddingHorizontal: 20, color: hitam
            , backgroundColor: putih
          },
        ]}
        onChangeText={text => setValue(text)}
        value={valuInput}
        placeholderTextColor={Grey}
        
        placeholder="Isi pesan disini"
      />
    </View>
  );
};

export default TextInputMassage;
