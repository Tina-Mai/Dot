import React from "react";
import { View, TextInput, ScrollView } from "react-native";
import { inputArea } from "../../../constants/styles";

const PhoneInput = ({ code, setCode }) => {
  return (
    <ScrollView contentContainerStyle={inputArea.wrapper} keyboardShouldPersistTaps={'handled'} scrollEnabled={false} style={{ overflow: 'visible' }}>
      <View style={{ width: "100%" }}>
        <TextInput
          style={inputArea.text}
          placeholder={"XXX XXX"}
          value={code}
          onChangeText={(code) => setCode(code)}
          clearButtonMode="always"
          autoCapitalize="none"
          inputMode="numeric"
        />
      </View>
    </ScrollView>
  );
};

export default PhoneInput;
