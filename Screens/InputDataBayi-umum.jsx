import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import {stylesDariGaya} from './Components/ImportedStyles';
import ButtonBack from './Components/ButtonBack';
import {TextInput} from 'react-native-gesture-handler';
import {hitam} from '../Assets/StylingComponent/Coloring';
// import RadioButtonRN from 'radio-buttons-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import RadioGroup from 'react-native-radio-buttons-group';
// import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import GreenButton from './Components/GreenButton';
import axios from 'axios';
import {ipAdress} from './Components/Url';
const InputDataBayi = ({navigation, route}) => {
  const [openJK, setopenJK] = useState(false);
  const [openTK, setopenTK] = useState(false);
  const [openUrutanKelahiran, setopenUrutanKelahiran] = useState(false);
  const [openPenolong, setopenPenolong] = useState(false);
  const [openKelahiran, setopenKelahiran] = useState(false);
  const [valueJK, setValueJK] = useState(null);
  const [valueTK, setValueTK] = useState(null);
  const [valueKelahiran, setvalueKelahiran] = useState(null);
  const [valuePenolong, setvaluePenolong] = useState(null);
  const [dateKelahiran, setdateKelahiran] = useState(new Date());
  const [dateSelected, setdateSelected] = useState('');
  const [showDateKelahiran, setshowDateKelahiran] = useState(false);
  const [nama, setnama] = useState('');
  const [beratBayi, setberatBayi] = useState('');
  const [panjangBayi, setpanjangBayi] = useState('');
  const [jenisKelamin, setjenisKelamin] = useState([
    {label: 'Laki-laki', value: 'Laki-laki'},
    {label: 'Perempuan', value: 'Perempuan'},
  ]);
  const [Tempatkelahiran, setTempatkelahiran] = useState([
    {label: 'RS', value: 'RS'},
    {label: 'Puskesmas', value: 'Puskesmas'},
  ]);
  const [urutanKelahiran, seturutanKelahiran] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ]);
  const [penolongKelahiran, setpenolongKelahiran] = useState([
    {label: 'Dokter', value: 'Dokter'},
    {label: 'Bidan/Perawat', value: 'Bidan/Perawat'},
    {label: 'Dukun', value: 'Dukun'},
    {label: 'Lainnya', value: 'Lainnya'},
  ]);

  const onCLickDate = () => {
    setshowDateKelahiran(!showDateKelahiran);
  };
  const onChangeDate = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setdateKelahiran(currentDate);
      if (Platform.OS === 'android') {
        onCLickDate();
        setdateSelected(currentDate.toDateString());
      }
    } else {
      onCLickDate();
    }
  };

  //nama, valueJK, valueTK, valueKelahiranke-, dateSelected, penolong, beratBayi, panjang bayi

  useEffect(() => {
    console.log(
      nama,
      valueJK,
      valueTK,
      valueKelahiran,
      dateSelected,
      valuePenolong,
      beratBayi,
      panjangBayi,
      Id,
    );
  }, [
    nama,
    valueJK,
    valueTK,
    valueKelahiran,
    dateSelected,
    valuePenolong,
    beratBayi,
    panjangBayi,
  ]);
  const {Id} = route.params;

  async function addDataBayi() {
    try {
      console.log('presed');
      const res = await axios({
        method: 'POST',
        data: {
          Id,
          Nama: nama,
          Jenis_Kelamin: valueJK,
          Tempat_Kelahiran: valueTK,
          Waktu_Kelahiran: dateSelected,
          Kelahiran: valueKelahiran,
          Penolong_Bayi: valuePenolong,
          Berat_Bayi: beratBayi,
          Panjang_Bayi: panjangBayi,
        },
        url: `${ipAdress}/aplikasiLayananAkta/addData/addDataBayi.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      console.log(
        Id,
        nama,
        valueJK,
        valueTK,
        dateSelected,
        valueKelahiran,
        valuePenolong,
        beratBayi,
        panjangBayi,
        "inin data"
      );
      const {value, message} = res.data;
      if (value == 1) {
        console.log('Berhasi ditambah');
      } else {
        console.log('belum jelas', message);
      }
    } catch (error) {
      alert('koneksi sedang tidak bagus, sihlakan coba lagi?');
      console.log(error);
    }
  }

  return (
    <View style={[{flex: 1}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Pendaftaran Layanan'} />
      </View>
      {/* container black box */}
      <ScrollView
        style={[
          {
            flex: 1,
            marginHorizontal: 10,
            // marginTop: 10,
            // borderWidth: 2,
            paddingHorizontal: 30,
            // paddingVertical: 40,
            marginVertical: 20,
          },
        ]}>
        {/* nama */}
        <View
          style={[
            style.jarakVertikal,
            {
              width: '100%',
            },
          ]}>
          <Text>Nama</Text>
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor: hitam,
                // flex: 1,
                backgroundColor: '#fff',
              },
            ]}
            value={nama}
            // onChangeText={text => onChangeText.target(text)}
            onChangeText={text => setnama(text)}
            placeholder="Robets"
          />
        </View>

        {/* jenis kelamin */}
        <View
          style={[style.containerDropdown, style.jarakVertikal, {zIndex: 5}]}>
          {/* <Icon name="user" size={20} /> */}
          <Text style={[style.textLabel]}>Jenis Kelamin</Text>
          <DropDownPicker
            placeholder="Jenis Kelamin"
            open={openJK}
            value={valueJK}
            items={jenisKelamin}
            setOpen={setopenJK}
            setValue={setValueJK}
            setItems={setjenisKelamin}
          />
        </View>

        {/* Tempat Kelahiran */}
        <View
          style={[
            style.jarakVertikal,
            style.containerDropdown,
            {
              zIndex: 4,
            },
          ]}>
          {/* <Icon name="location-dot" size={20} /> */}
          <Text style={[style.textLabel]}>Tempat Kelahiran</Text>
          <DropDownPicker
            placeholder="Tempat Kelahiran"
            open={openKelahiran}
            value={valueTK}
            items={Tempatkelahiran}
            setOpen={setopenKelahiran}
            setValue={setValueTK}
            setItems={setTempatkelahiran}
          />
        </View>
        {/* Urutan Kelahiran */}
        <View
          style={[
            style.jarakVertikal,
            style.containerDropdown,
            {
              zIndex: 1,
            },
          ]}>
          {/* <Icon name="child" size={20} /> */}
          <Text style={[style.textLabel]}>Urutan Kelahiran</Text>
          <DropDownPicker
            placeholder="Kelahiran"
            open={openUrutanKelahiran}
            value={valueKelahiran}
            items={urutanKelahiran}
            setOpen={setopenUrutanKelahiran}
            setValue={setvalueKelahiran}
            setItems={seturutanKelahiran}
          />
        </View>
        {/* Waktu Kelahiran */}
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
            <Text style={[style.textLabel]}>Waktu Kelahiran</Text>
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
                value={dateSelected}
                onChangeText={setdateSelected}
                editable={false}
              />
            </Pressable>
          </View>
        </View>
        {/* Penolong */}
        <View
          style={[
            style.jarakVertikal,
            style.containerDropdown,
            {
              zIndex: 1,
            },
          ]}>
          {/* <Icon name="location-dot" size={20} /> */}
          <Text style={[style.textLabel]}>Penolog</Text>
          <DropDownPicker
            placeholder="Penolong"
            open={openPenolong}
            value={valuePenolong}
            items={penolongKelahiran}
            setOpen={setopenPenolong}
            setValue={setvaluePenolong}
            setItems={setpenolongKelahiran}
          />
        </View>
        {/* container berat dan panjang */}
        <View
          style={[
            style.jarakVertikal,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          {/* berat bayi */}
          <View style={[style.containerDropdown]}>
            <Text style={[style.textLabel]}>Berat Bayi</Text>
            <TextInput
              value={beratBayi}
              onChangeText={text => setberatBayi(text)}
              style={[
                {
                  borderWidth: 1,
                  borderColor: hitam,
                  // flex: 1,
                  backgroundColor: '#fff',
                },
              ]}
              placeholder="10g"
            />
          </View>
          <View style={[style.containerDropdown]}>
            <Text style={[style.textLabel]}>Panjang Bayi</Text>
            <TextInput
              value={panjangBayi}
              onChangeText={text => setpanjangBayi(text)}
              style={[
                {
                  borderWidth: 1,
                  borderColor: hitam,
                  // flex: 1,
                  backgroundColor: '#fff',
                },
              ]}
              placeholder="10cm"
            />
          </View>
        </View>
        <GreenButton
          actionOnclick={async () => {
            try {
              await addDataBayi();
            } catch (error) {}
          }}
          ButtonText="Selanjutnya"
        />
      </ScrollView>
    </View>
  );
};

export default InputDataBayi;

const style = StyleSheet.create({
  jarakVertikal: {
    marginTop: 20,
  },
  containerDropdown: {
    // width: '100%',
  },
  textLabel: {
    fontSize: 16,
    color: '#000',
  },
});
