import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ungu } from '../../Assets/StylingComponent/Coloring';
const TextInputBox = ({Label, placeholderTitle, value, onChangeText, IconName}) => {
  return (
    <View style={[{marginTop: 15}]}>
      <Text>{Label}</Text>
      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
        <Icon color={ungu} name={IconName} size={20} />
        <TextInput
          style={[
            {
              width: '100%',
              height: 50,
              borderBottomWidth: 2,
              borderColor: '#999',
              paddingHorizontal: 20,
              backgroundColor: '#fff',
            },
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholderTitle}
        />
      </View>
    </View>
  );
};

export default TextInputBox;
