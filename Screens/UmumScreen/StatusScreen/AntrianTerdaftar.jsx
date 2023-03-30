 const AntrianTerdaftar =()=> {
    // * funtion tampilkan antrian terdaftar
    const url =
    ` ${ipAdress}/aplikasiLayananAkta/api/apiDataAntrian.php`
    const [dataAntrian, setDataAntrian] = useState();
    const getApi = () => {
     axios({
       method: 'POST',
       url: `${url}`,
     })
       .then(res => {
        
        let data = res.data;
        data = data.filter(d=> d.Status == "Terdaftar")
        // console.log(data, "ini data antrian terdaftar");
    
        setDataAntrian(data)})
       .catch(err => console.log(err)); 
    };
    useEffect(() => {
    
      getApi();
      console.log("ambil data Antrian terdaftar");
     }, [getApi()]);
      return (
        <View
          style={[{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}]}>
          <FlatList
            data={dataAntrian}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    flex: 1,
                    backgroundColor: '#F7F7F7',
                    marginVertical: 5,
                    alignSelf: 'center',
                    width: '80%',
                    justifyContent: 'center',
                    borderLeftWidth: 3,
                    borderColor: '#24CE9E',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center',
    
                    height: 100,
                  },
                ]}>
                {/*  colom 1 */}
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#D9D9D9',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialIcon size={30} style={{color: '#24CE9E'}} name="check" />
                </View>
                {/* colom 2 */}
                <View style={{justifyContent: 'space-between'}}>
                  {/* ============ */}
                  <View>
                    <View style={[StyleFlatlist.boxStyle]}>
                      <View
                        style={
                          [StyleFlatlist.boxColors, {backgroundColor: colorPink}]
                          // borderRadius: 7,
                        }
                      />
                      <Text>{item.IdAntrian}</Text>
                    </View>
                    <View style={[StyleFlatlist.boxStyle]}>
                      <View
                        style={
                          [StyleFlatlist.boxColors, {backgroundColor: colorUngu}]
                          // borderRadius: 7,
                        }
                      />
                      <Text>{item.IdAntrian}</Text>
                    </View>
                  </View>
                </View>
                {/* colom 3 */}
                <View style={{justifyContent: 'space-between'}}>
                  {/* ============ */}
                  <View>
                    <View style={[StyleFlatlist.boxStyle]}>
                      <View
                        style={{
                          height: 14,
                          width: 14,
                          // borderRadius: 7,
                          backgroundColor: colorHijau,
                        }}
                      />
                      <Text>{item.WaktuPendaftaran}</Text>
                    </View>
                    <View style={[StyleFlatlist.boxStyle]}>
                      <View
                        style={
                          [StyleFlatlist.boxColors, {backgroundColor: colorKuning}]
                          // borderRadius: 7,
                        }
                      />
                      <Text>{item.WaktuSelesai}</Text>
                    </View>
                  </View>
                </View>
                {/* ============================== */}
              </View>
            )}
          />
        </View>
      );
    }
    export default AntrianTerdaftar