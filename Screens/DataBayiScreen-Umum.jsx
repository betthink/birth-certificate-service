import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropdownSelect from './Components/DropdownSelect';
import {stylesDariGaya} from './Components/ImportedStyles';
import ButtonBack from './Components/ButtonBack';
import DateSelect from './Components/DateSelect';
import {
  hijau,
  hitam,
  putih,
  putihGelap,
  ungu,
} from '../Assets/StylingComponent/Coloring';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputBox from './Components/TextInputBox';
import {ScrollView} from 'react-native-gesture-handler';
import DefaultButtonBox from './Components/DefaultButtonBox';
import ModalCompon from './Components/ModalCompon';
import axios from 'axios';
import {ipAdress} from './Components/Url';
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
        setdataAdmin(StatusLayanan);
        console.log(StatusLayanan);
      })
      .catch(err => console.log(err));
  };

  const {Id} = route.params;
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
    getDataAdmin();
  }, []);
  return (
    <View style={[{flex: 1, backgroundColor: putih}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Data Bayi'} />
      </View>
      {dataAdmin == 0 ? (
        <View
          style={[
            {flex: 1,
              backgroundColor: putihGelap,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text>Antrian sedang Ditutup</Text>
        </View>
      ) : (
        <>
          {/* container content */}
          <ScrollView
            style={[{flex: 1, paddingHorizontal: 20, paddingVertical: 10}]}>
            <TextInputBox
              Label={'Nama'}
              IconName={'user'}
              placeholderTitle={'Isi nama lengkap bayi'}
              value={Nama}
              onChangeText={text => setNama(text)}
            />
            {/* dropJenis Kelamin */}
            <View style={[{zIndex: -1}]}>
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
            <View style={[{zIndex: -2}]}>
              {/* dropTmpt Persalinan */}
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
                Label={'TempatKelahiran'}
                placeholderTitle={'Palangka Raya..'}
                onChangeText={text => setTempatKelahiran(text)}
                value={TempatKelahiran}
                IconName={'user'}
              />
            </View>
            {/* drop Usutan kelahiran */}
            <View style={[{zIndex: -3}]}>
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
            <View style={[{zIndex: -4}]}>
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
            {/* date and time */}
            <View style={[{flex: 1, flexDirection: 'row', zIndex: -5}]}>
              <DateSelect
                //   mode : time, datetime ect
                // display : clock, default, calendar, clock
                openCalendar={() => OpenDate()}
                onChange={onChangeDate}
                valueinTextInput={newDateString}
                value={date}
                visible={DatePickerVisibility}
                IconName="calendar"
                placeholder={'yyyy-mm-dd'}
                mode={'date'}
                display={'calendar'}
              />
              <View
                style={[
                  {
                    height: 50,
                    borderWidth: 2,
                    borderColor: ungu,
                    paddingHorizontal: 20,
                    marginLeft: 10,
                    marginTop: 20,
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
                  <Icon size={20} color={ungu} name="clock" />
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
            {/* berat dan panjang */}
            <View style={[{zIndex: -6}]}>
              <TextInputBox
                Label={'Berat Bayi'}
                placeholderTitle={'*50g'}
                value={BeratBayi}
                onChangeText={text => setBeratBayi(text)}
                IconName={'baby'}
              />
            </View>
            <TextInputBox
              IconName={'baby'}
              Label={'Panjang Bayi'}
              placeholderTitle={'*50cm'}
              value={PanjangBayi}
              onChangeText={text => setPanjangBayi(text)}
            />
            {/* Button */}
            <DefaultButtonBox
              TitleColor={'#fff'}
              onClickAction={() => setkonfirmasi(true)}
              Title={'Submit'}
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
    </View>
  );
};

export default DataBayiScreen;