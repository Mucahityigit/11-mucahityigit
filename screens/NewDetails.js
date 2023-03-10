import { StyleSheet, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const NewDetails = ({ route, navigation }) => {
  const { url } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default NewDetails;

const styles = StyleSheet.create({});
