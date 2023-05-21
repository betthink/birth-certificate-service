import {View, Text, TouchableOpacity, Pressable, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
// import DateTimePicker from '@react-native-datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {hijau, ungu} from '../../Assets/StylingComponent/Coloring';
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
  // atribute state date select
  //   const [date, setDate] = useState(new Date());
  //   const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  //   //  ? Change format date to yyyy-mm-dd
  //   const dateFormated = date.toISOString().split('T')[0];
  //   //   function show/off date
  //   const OpenDate = () => {
  //     console.log('Presd');
  //     setDatePickerVisibility(true);
  //   };
  //   // function make value date
  //   const onChange = (event, selectedDate) => {
  //     const currentDate = selectedDate || date;
  //     setDate(currentDate);
  //     setDatePickerVisibility(false);
  //   };
  //   useEffect(() => {
  //     console.log(dateFormated);
  //   }, [dateFormated]);
  return (
    <View style={[{flex: 1, marginTop: 20}]}>
      {/* <Text>DateSelect</Text> */}
      <View style={[{height: 50, borderWidth: 2, borderColor: ungu}]}>
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
