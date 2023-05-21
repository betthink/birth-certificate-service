import {View, Text, Modal} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DropdownSelect = ({
  Label,
  value,
  setvalue,
  data,
  setData,
  open,
  setOpen,
  placeholder,
}) => {
  // const [visible, setVisible] = useState(false);
  return (
    <View style={[{marginVertical: 10, overflow: 'visible', marginTop: 15}]}>
      <Text>{Label}</Text>

      <DropDownPicker
        style={[{}]}
        placeholder={placeholder}
        open={open}
        value={value}
        items={data}
        setOpen={setOpen}
        setValue={setvalue}
        setItems={setData}
       
      />
    </View>
  );
};

export default DropdownSelect;
