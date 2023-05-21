import {View, Text} from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
const DatePicker = ({LabelName}) => {
  const onCLickDate = () => {
    setshowDateKelahiran(!showDateKelahiran);
  };
  const onChangeDate = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      // const year = currentDate.getFullYear();
      // const month = currentDate.getMonth();
      // const date = currentDate.getDate();
      // const stateDate = `${year}-${month}-${date}`;
      setdateKelahiran(currentDate);
      if (Platform.OS === 'android') {
        onCLickDate();
        setDateSelectedState(currentDate);
      }
    } else {
      onCLickDate();
    }
  };
  return (
    <View>
      {showDateKelahiran && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={dateKelahiran}
          onChange={onChangeDate}
          is24Hour={true}
        />
      )}
      <View
        style={[
          style.containerDropdown,
          style.jarakVertikal,
          {
            zIndex: -2,
          },
        ]}>
        {/* <Icon name="calendar" size={20} /> */}
        <Text style={[style.textLabel]}>{LabelName}</Text>
        <Pressable
          style={[
            {
              backgroundColor: '#fff',
              width: '100%',
              borderBottomWidth: 2,
              borderBottomColor: '#777',
            },
          ]}
          onPress={onCLickDate}>
          <TextInput
            placeholder="sat Aug 21 2022"
            value={value}
            onChangeText={onchange}
            editable={false}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default DatePicker;
