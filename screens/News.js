// @ts-nocheck
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  Linking,
  Text,
} from "react-native";
import React, { useState } from "react";
import New from "../components/New";
import Data from "../Data/Data.json";
import * as WebBrowser from "expo-web-browser";

const News = ({ route, navigation }) => {
  const filteredData = Data.filter(
    (item) => item.category === route.params.category
  );
  const newUTCDate = new Date().getUTCDate();

  const _handlePressButtonAsync = (item) => {
    navigation.navigate("NewDetails", { url: item.url, title: item.title });
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <Pressable onPress={() => _handlePressButtonAsync(item)}>
              <New
                img_uri={item.urlToImage}
                description={item.title}
                day_ago={new Date(item.publishedAt).getUTCDate() - newUTCDate}
                source={item.source.name}
              />
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 15,
  },
});
