import {View, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import GreenButton from '../Components/GreenButton';
// import {useNavigation} from '@react-navigation/native';

const DetailDataAntrian = ({route, navigation}) => {
  // const navigation = useNavigation();
  const {IdAntrian} = route.params;
  const [dataUpload, setdataUpload] = useState(null);

  const getDataUploads = () => {
    axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataBayiJoinFileUpload.php`,
    })
      .then(res => {
        let data = res.data;
        data = data.filter(d => d.IdAnak == IdAntrian);
        console.log(data, 'ini data');
        // setLeng(data.length);
        setdataUpload(data);
      })
      .catch(err => console.log(err));
  };
  const TerimaAntrian = async () => {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          Id: IdAntrian,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/TerimaAntrian.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value} = res.data;
      if (value == 1) {
        alert('antrian Sudah diterima');
        navigation.goBack();
      } else {
        alert('gagal menerima antrian');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const TolakAntrian = async () => {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          Id: IdAntrian,
        },
        url: `${ipAdress}/aplikasiLayananAkta/update/TolakAntrian.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // console.log(res.data);
      const {value} = res.data;
      if (value == 1) {
        alert('antrian Sudah ditolak');
        navigation.goBack();
      } else {
        alert('gagal menolak antrian');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(IdAntrian);
    getDataUploads();
  }, []);
  return (
    <View>
      <FlatList
        data={dataUpload}
        renderItem={({item}) => (
          <View>
            <Text>{item.IdAnak}</Text>
            <Text>{item.KK}</Text>
            <Text>{item.KTP_Ibu}</Text>
            <Text>{item.KTP_Ayah}</Text>
            <Text>{item.Ket_Nikah}</Text>
            <Text>{item.Ket_LahirAnak}</Text>
            <Text>{item.KTP_Saksi}</Text>
            <Text>{item.KTP_Saksi2}</Text>
          </View>
        )}
      />
      <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
        <GreenButton
          width={'40%'}
          ButtonText={'Terima'}
          actionOnclick={async () => {
            try {
              await TerimaAntrian();
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <GreenButton
          width={'40%'}
          ButtonText={'Tolak'}
          actionOnclick={async () => {
            try {
              await TolakAntrian();
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </View>
    </View>
  );
};

export default DetailDataAntrian;
