import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {putih, ungu} from '../../Assets/StylingComponent/Coloring';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import navigation in another component
import {useNavigation} from '@react-navigation/native';
const ButtonBack = ({buttontext}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={[{flexDirection: 'row'}]} onPress={() => navigation.goBack()}>
   
          <MaterialIcon
            style={{marginTop: 3, marginHorizontal: 22}}
            size={18}
            color={putih}
            name="arrow-back-ios"
          />
        <Text style={[styles.textStyle]}>{buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});
