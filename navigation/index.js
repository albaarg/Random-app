import {
  FontAwesome,
  Entypo,
  Foundation,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import LiveStreamingScreen from "../screens/LiveStreamingScreen";

import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from '../screens/ProfileScreen'

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Root"
        options={{
          headerShown: false,
        }}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Find",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="binoculars" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        })}
      />
      <BottomTab.Screen
        name="LiveStream"
        component={LiveStreamingScreen}
        options={{
          title: "Live Streaming",
          tabBarIcon: ({ color }) => (
            <Entypo name="video-camera" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={LiveStreamingScreen}
        options={{
          title: "Video",
          tabBarIcon: ({ color }) => (
            <Foundation name="play-video" size={40} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={LiveStreamingScreen}
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="access-time" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={ProfileScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box-outline"
              size={40}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
