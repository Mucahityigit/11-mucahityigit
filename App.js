import React from "react";
import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import News from "./screens/News";
import NewDetails from "./screens/NewDetails";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.status_bar_container}>
        <StatusBar translucent barStyle="default" />
      </View>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: "#2396F5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Haber Kategorileri",
          }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={({ route, navigation }) => ({
            title: route.params.category,
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons name="chevron-back-sharp" size={32} color="white" />
                <Text style={styles.text_style}>Back</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="NewDetails"
          component={NewDetails}
          options={({ route, navigation }) => ({
            title: route.params.title,
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons name="chevron-back-sharp" size={32} color="black" />
                <Text style={styles.text_style}>Back</Text>
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text_style: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  status_bar_container: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: Constants.statusBarHeight + 10,
    backgroundColor: "#2396F5",
    padding: 10,
  },
});
