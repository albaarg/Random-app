import { useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

const codeList = [
  {
    name: "Hong kong (+852)",
    value: "+852",
  },
  {
    name: "China (+86)",
    value: "+86",
  },
  {
    name: "Taiwan (+886)",
    value: "+886",
  },
  {
    name: "Macao (+853)",
    value: "+853",
  },
];

const LoginScreen = () => {
  const navigation = useNavigation();
  const pickerRef = useRef();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

  const onLogin = async () => {
    if (phone === "") {
      ToastAndroid.showWithGravity(
        "Phone Number Empty",
        500,
        ToastAndroid.CENTER
      );
      return;
    }
    if (password === "") {
      ToastAndroid.showWithGravity("Password Empty", 500, ToastAndroid.CENTER);
      return;
    }
    const url = "http://161.117.250.103/api/app/auth/loginByPwd";
    try {
      const data = {
        mobile: phone,
        password: password,
      };
      const res = await axios.post(url, data);
      if (res) {
        console.log(res.data);
        if (res.data.code === 200) {
          navigation.navigate("Root");
        } else {
          ToastAndroid.showWithGravity(
            "Invalid Phone Number/Password",
            500,
            ToastAndroid.CENTER
          );
        }
      }
    } catch (error) {
      console.log(error, "error"),
        ToastAndroid.showWithGravity(
          "Failed To Login",
          500,
          ToastAndroid.CENTER
        );
    }
  };

  function open() {
    pickerRef.current.focus();
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoTitle}>LOGO ▪Ronin</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputForm}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={open}
            style={styles.numberContainer}
          >
            <Text style={styles.selectNumber}>
              {selectedCode === "" ? "Country Code" : selectedCode}
            </Text>
          </TouchableOpacity>

          <View style={styles.containerPiker}>
            <Picker
              ref={pickerRef}
              selectedValue={selectedCode}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCode(itemValue)
              }
            >
              {codeList.map((code) => (
                <Picker.Item
                  key={code.name}
                  label={code.name}
                  value={code.value}
                />
              ))}
            </Picker>
          </View>

          <TextInput
            value={phone}
            keyboardType={"number-pad"}
            onChangeText={(val) => setPhone(val)}
            style={styles.inputText}
            placeholderTextColor={"#C5C5C5"}
            placeholder={"Phone Number"}
          />
        </View>
        <View style={styles.inputForm}>
          <TextInput
            value={password}
            onChangeText={(val) => setPassword(val)}
            style={styles.inputText}
            placeholderTextColor={"#C5C5C5"}
            placeholder={"Password"}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onLogin}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Root")}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Login as Tourist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity activeOpacity={0.8} style={styles.register}>
          <Text style={styles.bottomTxt}>
            Don't have an account yet? Click here to register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.register}>
          <Text style={styles.bottomTxt}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
