import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import CategoryList from "../components/CategoryList";

const Home = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>
        <CategoryList navigation={navigation} />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
