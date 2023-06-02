import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropdownSelect from './Components/DropdownSelect';
import {stylesDariGaya} from './Components/ImportedStyles';
import ButtonBack from './Components/ButtonBack';
import DateSelect from './Components/DateSelect';
import {
  Kuning,
  greenTea,
  hijau,
  hitam,
  putih,
  putihGelap,
  ungu,
} from '../Assets/StylingComponent/Coloring';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeaherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputBox from './Components/TextInputBox';
import {ScrollView} from 'react-native-gesture-handler';
import DefaultButtonBox from './Components/DefaultButtonBox';
import ModalCompon from './Components/ModalCompon';
import axios from 'axios';
import {ipAdress} from './Components/Url';
// import { Image } from 'react-native-svg';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const DataBayiScreen = ({route, navigation}) => {
  const [dataAdmin, setdataAdmin] = useState([]);
  const getDataAdmin = () => {
    axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataUserAdmin.php`,
    })
      .then(res => {
        // console.log(res.data, "ini data dari getDataAdmin");
        // data = data.filter(d => d.Status == 'Selesai');
        // console.log(data, "ini data antrian terdaftar");

        const StatusLayanan = res.data[0].StatusLayanan;
        let data = res.data;
        data = data.map(obj => obj.StatusLayanan);

        const sum = data.reduce((accumulator, currentValue) => {
          return accumulator + parseInt(currentValue);
        }, 0);
        console.log(sum, 'Ini akumulasi');

        setdataAdmin(sum);
      })
      .catch(err => console.log(err));
  };

  const {Id} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  // atribute Nama
  const [Nama, setNama] = useState('');
  const [BeratBayi, setBeratBayi] = useState('');
  const [PanjangBayi, setPanjangBayi] = useState('');
  const [konfirmasi, setkonfirmasi] = useState(false);
  // atribute Jenis Kelamin
  const [openJK, setopenJK] = useState(false);
  const [vJenisKelamin, setvJenisKelamin] = useState(null);
  const [dataJenisKelamin, setdataJenisKelamin] = useState([
    {label: 'Laki-laki', value: 'Laki-laki'},
    {label: 'Perempuan', value: 'Perempuan'},
  ]);
  //   atribute Tempat Persalinan
  const [openTP, setopenTP] = useState(false);
  const [vTempatPersalinan, setvTempatPersalinan] = useState(null);
  const [dataTempatPersalinan, setdataTempatPersalinan] = useState([
    {label: 'RS', value: 'RS'},
    {label: 'Puskesmas', value: 'Puskesmas'},
    {label: 'Rumah', value: 'Rumah'},
    {label: 'Lainnya', value: 'Lainnya'},
  ]);
  // Tempat Kelahiran
  const [TempatKelahiran, setTempatKelahiran] = useState('');
  //   atribute UrutanKelahiran
  const [openUK, setopenUK] = useState(false);
  const [vUrutanKelahiran, setvUrutanKelahiran] = useState(null);
  const [dataUrutanKelahiran, setdataUrutanKelahiran] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ]);
  //   atribute PenolongKelahiran
  const [openPK, setopenPK] = useState(false);
  const [vPenolongKelahiran, setvPenolongKelahiran] = useState(null);
  const [dataPenolongKelahiran, setdataPenolongKelahiran] = useState([
    {label: 'Dokter', value: 'Dokter'},
    {label: 'Bidan/Perawat', value: 'Bidan/Perawat'},
    {label: 'Dukun', value: 'Dukun'},
    {label: 'Lainnya', value: 'Lainnya'},
  ]);
  //   atribute date
  // ?atribute state date select
  const [date, setDate] = useState(new Date());
  const [DatePickerVisibility, setDatePickerVisibility] = useState(false);
  //  ? Change format date to yyyy-mm-dd
  const dateFormated = date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  // const changeFormat = dateFormated.split('/');
  // const newDate = `${dateFormated[2]}-${dateFormated[1]}-${dateFormated[2]}`;
  // const newDate = dateFormated.replace('/', '-').replace('/', '-');
  const parts = dateFormated.split('/'); // ['25', '05', '2023']
  const newDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;

  //   function show/off date
  const OpenDate = () => {
    setDatePickerVisibility(true);
  };
  // function make value date
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setDatePickerVisibility(false);
  };
  //   ?closed atribute date
  //  ? open atribute setime
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const timeString = time.toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  const timeArray = timeString.split(':');
  const getTime = timeArray[0] + ':' + timeArray[1] + ':' + '00';

  const onChange = (event, selectedTime) => {
    setShowTimePicker(Platform.OS === 'ios');
    setTime(selectedTime || time);
  };
  const showTimepicker = () => {
    setShowTimePicker(true);
  };
  // function add dataBayi
  async function addDataBayi() {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          IdUser: Id,
          Nama,
          JenisKelamin: vJenisKelamin,
          TempatPersalinan: vTempatPersalinan,
          TempatKelahiran: TempatKelahiran,
          DateKelahiran: newDateString,
          TimeKelahiran: getTime,
          UrutanKelahiran: vUrutanKelahiran,
          PenolongBayi: vPenolongKelahiran,
          BeratBayi: BeratBayi,
          PanjangBayi: PanjangBayi,
        },
        url: `${ipAdress}/aplikasiLayananAkta/addData/addDataBayi.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      console.log(
        getTime,
        newDateString,
        Nama,
        vJenisKelamin,
        vTempatPersalinan,
        vUrutanKelahiran,
        vPenolongKelahiran,
        BeratBayi,
        PanjangBayi,
        TempatKelahiran,
      );
      const {value, message, IdAnak} = res.data;
      // console.log(res.data);
      if (value == 1) {
        alert('Akun Berhasil Didaftarkan');
        setkonfirmasi(false);
        console.log('ini id baru anank', IdAnak);
        navigation.navigate('DataIbuScreen', {IdAnak, IdUser: Id});
      } else {
        alert(message);
        setkonfirmasi(false);
      }
    } catch (error) {
      alert('koneksi sedang tidak bagus, sihlakan coba lagi?');
      console.log(error);
    }
    // console.log(res.data['message']);
  }
  // !UseEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    getDataAdmin();
  }, []);
  return (
    <View style={[{flex: 1, backgroundColor: putih}]}>
      {isLoading ? (
        <View
          style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
          <ActivityIndicator size="large" color={ungu} />
        </View>
      ) : (
        <>
          <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
            <ButtonBack buttontext={'Data Bayi'} />
          </View>
          {dataAdmin == 0 ? (
            <View
              style={[
                {
                  flex: 1,
                  backgroundColor: putihGelap,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={[{fontSize: 17, alignSelf: 'center'}]}>
                Antrian sedang Ditutup
              </Text>
              <Image
                style={[{resizeMode: 'center', flex: 1}]}
                source={require('../Assets/Images/tired.png')}
              />
            </View>
          ) : (
            <>
              {/* container content */}
              <ScrollView
                style={[{flex: 1, paddingHorizontal: 20, paddingVertical: 10}]}>
                {/* <Image
                  style={[
                    {
                      resizeMode: 'center',
                      width: '100%',
                      height: 200,
                      borderBottomWidth: 2,
                      borderColor: 'salmon',
                    },
                  ]}
                  source={require('../Assets/Images/fillFormulir.png')}
                /> */}
                <TextInputBox
                  Label={'Nama'}
                  IconName={'user'}
                  placeholderTitle={'Isi nama lengkap bayi'}
                  value={Nama}
                  onChangeText={text => setNama(text)}
                />
                {/* dropJenis Kelamin */}
                <View style={[{zIndex: -1}, style.containerDropdownAndIcon]}>
                  <FeaherIcon style={[{color: ungu}]} name="users" size={20} />
                  <DropdownSelect
                    Label="Jenis Kelamin"
                    placeholder={'Pilih Jenis Kelamin'}
                    open={openJK}
                    setOpen={setopenJK}
                    data={dataJenisKelamin}
                    setData={setdataJenisKelamin}
                    value={vJenisKelamin}
                    setvalue={setvJenisKelamin}
                  />
                </View>
                {/* dropTmpt Persalinan */}
                <View style={[{zIndex: -2}, style.containerDropdownAndIcon]}>
                  <MaterialIcon
                    style={[{color: ungu}]}
                    name="hospital-building"
                    size={20}
                  />

                  <DropdownSelect
                    placeholder={'Pilih Tempat'}
                    Label="Tempat Persalinan"
                    open={openTP}
                    setOpen={setopenTP}
                    data={dataTempatPersalinan}
                    setData={setdataTempatPersalinan}
                    value={vTempatPersalinan}
                    setvalue={setvTempatPersalinan}
                  />
                </View>
                {/* Tempat kelahiran */}
                {/* TempatKelahiran */}
                <View style={[{zIndex: -3}]}>
                  <TextInputBox
                    Label={'Tempat Kelahiran'}
                    placeholderTitle={'*kabupaten/kota/kecamatan'}
                    onChangeText={text => setTempatKelahiran(text)}
                    value={TempatKelahiran}
                    IconName={'map-pin'}
                  />
                </View>
                {/* drop Usutan kelahiran */}
                <View style={[{zIndex: -3}, style.containerDropdownAndIcon]}>
                  <FeaherIcon style={[{color: ungu}]} name="users" size={20} />
                  <DropdownSelect
                    placeholder={'Pilih Urutan Kelahiran'}
                    Label="Urutan Kelahiran"
                    open={openUK}
                    setOpen={setopenUK}
                    data={dataUrutanKelahiran}
                    setData={setdataUrutanKelahiran}
                    value={vUrutanKelahiran}
                    setvalue={setvUrutanKelahiran}
                  />
                </View>

                {/* drop Penolong Kelahiran */}
                <View style={[{zIndex: -4}, style.containerDropdownAndIcon]}>
                  <FontAwesome5
                    style={[{color: ungu}]}
                    name="user-nurse"
                    size={20}
                  />
                  <DropdownSelect
                    placeholder={'Pilih Penolong Kelahiran'}
                    Label="Penolong Kelahiran"
                    open={openPK}
                    setOpen={setopenPK}
                    data={dataPenolongKelahiran}
                    setData={setdataPenolongKelahiran}
                    value={vPenolongKelahiran}
                    setvalue={setvPenolongKelahiran}
                  />
                </View>
                <View style={[{flexDirection: 'row', zIndex: -5}]}>
                  {/* date  */}
                  <View
                    style={[
                      {
                        flex: 1,
                        zIndex: -5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                      },
                    ]}>
                    <Icon name="calendar" size={20} color={ungu} />
                    <View style={[{paddingLeft: 17}]}>
                      <Text style={[style.label]}>Tanggal Kelahiran</Text>
                      <DateSelect
                        //   mode : time, datetime ect
                        // display : clock, default, calendar, clock
                        openCalendar={() => OpenDate()}
                        onChange={onChangeDate}
                        valueinTextInput={newDateString}
                        value={date}
                        visible={DatePickerVisibility}
                        // IconName="calendar"
                        placeholder={'yyyy-mm-dd'}
                        mode={'date'}
                        display={'calendar'}
                      />
                    </View>
                  </View>
                  {/* Time */}
                  <View
                    style={[
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                        marginTop: 15,
                      },
                    ]}>
                    <Icon size={20} color={ungu} name="clock" />
                    <View style={[{paddingLeft: 16, width: 200}]}>
                      <Text style={[style.label]}>Jam Kelahiran</Text>
                      <View
                        style={[
                          {
                            height: 50,
                            borderEndWidth: 2,
                            borderBottomWidth: 2,
                            borderColor: ungu,
                            // paddingHorizontal: 20,
                            // marginLeft: 10,
                            flex: 1,
                            // marginTop: 20,
                          },
                        ]}>
                        {/* Time Selecter */}
                        <TouchableOpacity
                          style={[
                            {
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            },
                          ]}
                          onPress={showTimepicker}>
                          <TextInput
                            // value={valueinTextInput}
                            placeholder={getTime}
                            editable={false}
                          />
                        </TouchableOpacity>
                        {showTimePicker && (
                          <DateTimePicker
                            value={time}
                            mode="time"
                            is24Hour={true}
                            display="spinner"
                            onChange={onChange}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </View>
                {/* berat dan panjang */}
                <View style={[{zIndex: -6, flex: 1}]}>
                  <TextInputBox
                    Label={'Berat Bayi'}
                    placeholderTitle={'*Gunakan satuan gram/g'}
                    value={BeratBayi}
                    onChangeText={text => setBeratBayi(text)}
                    IconName={'baby'}
                    InputType={'numeric'}
                  />
                </View>
                <TextInputBox
                  InputType={'numeric'}
                  IconName={'baby'}
                  Label={'Panjang Bayi'}
                  placeholderTitle={'*Gunakan satuan centimeter/cm'}
                  value={PanjangBayi}
                  onChangeText={text => setPanjangBayi(text)}
                />
                {/* Button */}
                <DefaultButtonBox
                  TitleColor={'#fff'}
                  onClickAction={() => setkonfirmasi(true)}
                  Title={'Lanjutkan'}
                />
              </ScrollView>
              {/* Modal/Pop up  */}
              <ModalCompon
                onPresAction={async () => {
                  try {
                    await addDataBayi();
                  } catch (error) {}
                }}
                stateValueModal={konfirmasi}
              />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default DataBayiScreen;
const style = StyleSheet.create({
  containerDropdownAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
