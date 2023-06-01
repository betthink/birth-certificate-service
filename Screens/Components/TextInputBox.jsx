import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { greenTea, ungu } from '../../Assets/StylingComponent/Coloring';
const TextInputBox = ({Label, placeholderTitle, value, onChangeText, IconName,InputType}) => {
  return (
    <View style={[{marginTop: 15}]}>
      <Text style={[{fontWeight: 'bold', letterSpacing: 1}]}>{Label}</Text>
      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
        <Icon color={ungu} name={IconName} size={20} />
        <TextInput
          style={[
            {
              // width: '100%', fl
              flex: 1,
              height: 50,
              borderBottomWidth: 2,
              borderColor: '#999',
              paddingLeft: 20,
              // paddingHorizontal: 20,
              backgroundColor: '#fff',
            },
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholderTitle}
          keyboardType={InputType}
        />
      </View>
    </View>
  );
};

export default TextInputBox;
