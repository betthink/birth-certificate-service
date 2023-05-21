import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import {FlatList} from 'react-native-gesture-handler';

const DetailDataAntrian = ({route}) => {
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
  useEffect(() => {
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
    </View>
  );
};

export default DetailDataAntrian;
