import React from "react";
import { View, Text, TextInput } from "react-native";
import { fonts, inputArea } from "../../../constants/styles";

const PhoneInput = ({ phone, setPhone }) => {
  return (
    <View style={inputArea.wrapper}>
      <View style={{ width: "100%" }}>
        <TextInput
          style={inputArea.text}
          placeholder={"+1 XXX XXX XXX"}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          clearButtonMode="always"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default PhoneInput;
