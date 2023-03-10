import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const New = ({ img_uri, description, day_ago, source }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: img_uri,
        }}
      />
      <View style={styles.content_container}>
        <Text>{description}</Text>
        <View style={styles.texts_container}>
          <View style={styles.source_container}>
            <FontAwesome5 name="newspaper" size={16} color="black" />
            <Text>{source}</Text>
          </View>
          <View style={styles.day_ago_container}>
            <Feather name="clock" size={15} color="black" />
            <Text>{day_ago} gün önce</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 15,
  },
  image: {
    height: 115,
    width: 115,
  },
  content_container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 35,
  },
  texts_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  source_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  day_ago_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
});
