import React, {useState, useEffect} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = () => {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const dateObj = new Date(time);
  const formattedDate = `${dateObj.getHours()}:${dateObj.getMinutes()}:0`;

  const timePicker = (event, selectedTime) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedTime !== undefined) {
      setTime(selectedTime);
    }
  };

  const showTimepicker = () => {
    setShowPicker(true);
  };
  useEffect(() => {
    // console.log(time);
    console.log(formattedDate);
  }, [time, formattedDate]);
  return (
    <View>
      <Button onPress={showTimepicker} title="Select Time" />
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={timePicker}
        />
      )}
    </View>
  );
};

export default TimePicker;
