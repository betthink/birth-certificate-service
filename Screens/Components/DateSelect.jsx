import {View, Text, TouchableOpacity, Pressable, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
// import DateTimePicker from '@react-native-datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {greenTea, hijau, ungu} from '../../Assets/StylingComponent/Coloring';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const DateSelect = ({
  IconName,
  onChange,
  value,
  valueinTextInput,
  visible,
  openCalendar,
  placeholder,
  mode,
  display,
}) => {
 
  return (
    <View style={[{flex: 1}]}>
      {/* <Text>DateSelect</Text> */}
      <View style={[{height: 50,borderBottomWidth: 2, borderColor: ungu}]}>
        <TouchableOpacity
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            },
          ]}
          onPress={openCalendar}>
          <TextInput
            value={valueinTextInput}
            placeholder={placeholder}
            editable={false}
          />
          <Icon size={20} color={ungu} name={IconName} />
        </TouchableOpacity>
      </View>
      {visible && (
        <DateTimePicker
          //   testID="dateTimePicker"
          value={value}
          mode={mode}
          //   is24Hour={true}
          display={display}
          onChange={onChange}
          visible={visible}
        />
      )}
    </View>
  );
};

export default DateSelect;
