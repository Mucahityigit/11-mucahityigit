import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Categories } from "../Data/Categories";
import Category from "./Category";

const CategoryList = ({ navigation }) => {
  const handleNavigate = (item) => {
    navigation.navigate("News", {
      category: item.title,
    });
  };
  return (
    <View>
      <FlatList
        numColumns={3}
        data={Categories}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleNavigate(item)}>
            <Category category={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
