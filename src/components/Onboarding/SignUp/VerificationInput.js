import React from "react";
import { View, TextInput } from "react-native";
import { inputArea } from "../../../constants/styles";

const PhoneInput = ({ code, setCode }) => {
  return (
    <View style={inputArea.wrapper}>
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
    </View>
  );
};

export default PhoneInput;
