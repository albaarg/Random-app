import * as React from 'react';
import { dataHome } from '../data/home';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native'


export default function Home() {
  return (
    <View style={styles.dataContainer}> 
    <FlatList
      data={dataHome}
      numColumns={2}
      keyExtractor={item => item.id}
      contentContainerStyle={{
        justifyContent: 'center'
      }}
      renderItem={({ item }) =>
        <View style={styles.imageHeader}>
        <>
          <Image
            style={styles.imageHome}
            source={item.img}
            resizeMode='cover'
          />
          <View style={styles.underView}>
            <Text style={styles.colorStyle}>{item.title}</Text>
            <Text style={styles.colorStyle}>{item.description}</Text>
          </View>
        </>
        </View>
      } />
      </View>
  )
}
const styles = StyleSheet.create({
  dataContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#000'
  },
  colorStyle: {
    color: 'white',

  },
  imageHome:{
    width: '100%',
    height: 200,
    borderRadius: 30,
  },
  imageHeader:{
    width: '48%',
    marginHorizontal: '1%',
    borderRadius: 30,
    backgroundColor:'gray',
    marginBottom: 10,
  },
  underView:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})