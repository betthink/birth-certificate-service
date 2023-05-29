import {View, Text, Modal} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { greenTea, ungu } from '../../Assets/StylingComponent/Coloring';

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
    <View style={[{paddingLeft: 10, overflow: 'visible', flex: 1}]}>
      <Text style={[{fontWeight: 'bold', letterSpacing: 1}]}>{Label}</Text>

      <DropDownPicker
     
        style={[{borderColor: ungu}]}
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
