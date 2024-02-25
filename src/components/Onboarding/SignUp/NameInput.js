import React from "react";
import { View, TextInput, ScrollView } from "react-native";
import { inputArea } from "../../../constants/styles";

const NameInput = ({ firstName, setFirstName, lastName, setLastName }) => {
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} scrollEnabled={false} style={{ overflow: 'visible' }} >
      <View style={inputArea.wrapper}>
        <View style={{ width: "100%" }}>
          <TextInput
            style={inputArea.text}
            placeholder={"first name"}
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={{ height: 15 }} />

      <View style={inputArea.wrapper}>
        <View style={{ width: "100%" }}>
          <TextInput
            style={inputArea.text}
            placeholder={"last name"}
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            autoCapitalize="none"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NameInput;
