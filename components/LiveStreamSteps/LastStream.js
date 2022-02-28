import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const LastStream = ({ hours, minutes, seconds }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLeft}>
            <View
              style={{
                backgroundColor: "gray",
                padding: 10,
                borderRadius: 50,
                margin: 3,
              }}
            >
              <MaterialCommunityIcons
                name="human-greeting"
                size={24}
                color="white"
              />
            </View>
            <View style={{ paddingRight: 5 }}>
              <Text style={{ color: "white", fontSize: 12 }}>
                User_NuA-6IGXi
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                Number of people online : 1
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRight}>
            <MaterialCommunityIcons
              name="human-greeting"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            ID: 588121
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="access-time" size={20} color="white" />
            <Text style={{ color: "white", marginLeft: 5 }}>00:00:00</Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            marginHorizontal: 20,
            marginBottom: 10,
            textAlign: "center",
            backgroundColor: "lightgray",
            borderRadius: 10,
            width: "60%",
            padding: 2,
          }}
        >
          User_NuA - 6-1GXi joined the live room
        </Text>
        <Text
          style={{
            color: "#8D6F40",
            marginHorizontal: 20,
            backgroundColor: "#31261F",
            borderRadius: 10,
            padding: 10,
            width: "80%",
          }}
        >
          System news : We advocate green live broadcast , cover and live
          content Including smoking , vulgar , lure , exposure and so on are
          blocked or frozen No. , Internet police 24-hour online patrol
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Say Something"
          style={{
            backgroundColor: "gray",
            alignSelf: "stretch",
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 20,
            marginBottom: 10,
          }}
        />
      </View>
    </View>
  );
};

export default LastStream;

const styles = StyleSheet.create({
  container: {
    zIndex: 30,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    marginTop: 50,
  },
  buttonLeft: {
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 50,
  },
  buttonRight: {
    backgroundColor: "gray",
    padding: 8,
    borderRadius: 50,
  },
});
