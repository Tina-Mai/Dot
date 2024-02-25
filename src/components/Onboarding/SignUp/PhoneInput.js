import React from "react";
import { View, TextInput } from "react-native";
import { inputArea } from "../../../constants/styles";

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
          inputMode="tel"
        />
      </View>
    </View>
  );
};

export default PhoneInput;
