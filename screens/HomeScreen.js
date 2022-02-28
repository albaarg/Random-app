import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import Colors from "../constants/Colors";
import Home from '../components/Home';

import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
        }}
      >
        <View style={styles.finderView}>
          <FontAwesome name="search" size={24} color="black" />
          <Text style={{ flex: 1, marginLeft: 10 }}>Que estas buscando?</Text>
        </View>

        <Image
          source={ require('../assets/images/img4.jpeg') }
          style={{ width: '100%', height: 250, marginVertical: 10, borderRadius: 25}}
          resizeMode="cover"
        />
        <Text style={{ color: Colors.light.tint }}>
          ply dummy text of the printing and typesetting industry
        </Text>
        
        <Home/>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  finderView:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  }
});
