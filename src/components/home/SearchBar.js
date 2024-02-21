import React from "react";
import { TextInput, View } from "react-native";
import { inputArea } from "../../constants/styles";

const SearchBar = ({ text, searchHandler }) => {
  return (
    <View style={inputArea.wrapper}>

    <View style={{ width: "100%" }}>
      <TextInput
        style={inputArea.text}
        placeholder={"Find a task..."}
        value={text}
        onChangeText={(text) => searchHandler(text)}
      />
    </View>
    </View>
    
  );
};

export default SearchBar;
