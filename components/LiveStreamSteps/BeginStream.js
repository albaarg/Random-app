import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const BeginStream = ({ setType, setCount, type, Camera }) => {
  return (
    <View
      style={{
        zIndex: 30,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          marginTop: 80,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            paddingLeft: 10,
            paddingVertical: 10,
            width: "80%",
            alignSelf: "center",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignSelf: "flex-start",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="piggy-bank" size={24} color="blue" />
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                textAlign: "center",
                color: "white",
                justifyContent: "center",
                fontSize: 10,
                width: 40,
              }}
            >
              Upload
            </Text>
          </View>
          <TextInput
            placeholder="useless placeholder"
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderColor: "lightgrey",
              margin: 10,
              color: "white",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <MaterialIcons name="flip-camera-android" size={24} color="white" />
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="magic" size={24} color="white" />
          <Text style={styles.text}> Beautify </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          paddingHorizontal: 90,
          paddingVertical: 10,
          width: "80%",
          alignSelf: "center",
          borderRadius: 30,
          marginBottom: 30,
        }}
        onPress={() => {
          setCount(3);
        }}
      >
        <Text
          style={{
            backgroundColor: "white",
            textAlign: "center",
            color: "red",
          }}
        >
          BEGIN A STREAM
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BeginStream;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  button: {
    flex: 0.2,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
  },
});
