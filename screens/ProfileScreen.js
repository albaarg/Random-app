import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={{ backgroundColor: "#000" }}>
      <View style={{ flexDirection: 'row', backgroundColor: "dimgrey", padding: 18, justifyContent: 'space-between' }}>
        <View style={{ flex:2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 200, padding: 18}}>
          <FontAwesome name="user" size={50} color="black" />
          </View>
          <View style={{ marginLeft: 5}} >
            <Text style={styles.profileText}>nickname</Text>
            <Text style={styles.profileText}>id 542</Text>
          </View>
        </View>
        <View style={{ flex:1}}>
          <TouchableOpacity><Text style={styles.button}>Detalles</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>Cerrar sesion</Text></TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={{backgroundColor:'goldenrod', width: '50%', borderRadius:10, margin:2, alignItems:'center'}}>
        <Text style={styles.profileText}>Propiedad</Text>
        </View>
        <Text style={{fontWeight:'normal', color:'white', fontSize:20, padding:4}}>Puntos</Text>
        <Text style={{fontWeight:'bold', color:'white', fontSize: 28}}>1000</Text>
        <View style={{ flexDirection:'row'}}>
        <Text style={{color:'white', textAlign:'center', fontSize:20, backgroundColor:'goldenrod', width:'24%', borderRadius:14}}>Detalles</Text >
        <Text style={{color:'white', textAlign:'center', fontSize:20, backgroundColor:'black', borderWidth:1, borderColor:'goldenrod', width:'24%', borderRadius:14}}>Detalles</Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1.9, paddingVertical: 5, marginBottom: 10}}>
          <Text style={[styles.profileText, { flex: 1}]}>transmicion en vivo</Text>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1.9, paddingVertical: 5, marginBottom: 10}}>
          <Text style={[styles.profileText, { flex: 1}]}>Actuacion</Text>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1.9, paddingVertical: 5, marginBottom: 10}}>
          <Text style={[styles.profileText, { flex: 1}]}>Mi gremio</Text>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1.9, paddingVertical: 5, marginBottom: 10}}>
          <Text style={[styles.profileText, { flex: 1}]}>Factura</Text>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1.9, paddingVertical: 5, marginBottom: 10}}>
          <Text style={[styles.profileText, { flex: 1}]}>Vincular mobil</Text>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1.9, paddingVertical: 5, marginBottom: 10}}>
          <Text style={[styles.profileText, { flex: 1}]}>Mi atencion</Text>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1.9, paddingVertical: 5, marginBottom: 10}}>
          <Text style={[styles.profileText, { flex: 1}]}>FQA</Text>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileText: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 25,
    justifyContent: 'center'

  },
  lineStyle: {
    height: 1,
    width: 100,
    backgroundColor: '#CCCCCC'
  },
  lineView: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    color: 'black',
    backgroundColor: 'gainsboro',
    textAlign: 'center',
    fontSize: 16,
    height: 28,
    borderRadius: 12,
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 25,
    justifyContent: 'center'

  },
})