import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { COLORS, SHADOWS } from "../../constants";

const SearchBar = ({ text, searchHandler }) => {
  return (
    <View style={styles.inputAreaWrapper}>
      <TextInput
        style={styles.inputAreaText}
        placeholder={"Find a task..."}
        value={text}
        onChangeText={(text) => searchHandler(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputAreaWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 15,
  },
  inputAreaText: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    borderRadius: 60,
    shadowColor: "#2E303F",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
});

export default SearchBar;
