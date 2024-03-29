import React from "react";
import { TextInput, View } from "react-native";
import { inputArea } from "../../constants";

const SearchBar = ({ text, searchHandler }) => {
  return (
    <View style={inputArea.wrapper}>
        <View style={{ width: "100%" }}>
            <TextInput
                style={inputArea.text}
                placeholder={"find a task..."}
                value={text}
                onChangeText={(text) => searchHandler(text)}
                clearButtonMode="always"
                autoCapitalize="none"
            />
        </View>
    </View>
    
  );
};

export default SearchBar;
