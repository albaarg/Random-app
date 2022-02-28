import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import styles from "./styles";
import CountDown from "../../components/LiveStreamSteps/CountDown";
import BeginStream from "../../components/LiveStreamSteps/BeginStream";
import LastStream from "../../components/LiveStreamSteps/LastStream";

export default function LiveStreamingScreen() {
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [count, setCount] = useState(0);
  const [isBegin, setIsBegin] = useState(true);
  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);

  const tick = () => {
    setDiff(new Date(+new Date() - initial));
  };
  const start = () => {
    setInitial(+new Date());
  };

  useEffect(() => {
    if (initial) {
      requestAnimationFrame(tick);
    }
  }, [initial]);

  useEffect(() => {
    if (diff) {
      requestAnimationFrame(tick);
    }
  }, [diff]);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      setIsBegin(false);
      start();
    }
  }, [count]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={{ color: "white" }}>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {isFocused && <Camera style={styles.camera} type={type} />}
      {count > 0 ? (
        <CountDown count={count} />
      ) : isBegin ? (
        <BeginStream
          setCount={setCount}
          setType={setType}
          type={type}
          Camera={Camera}
        />
      ) : (
        <LastStream />
      )}
    </View>
  );
}
