import React from "react";
import { View, TextInput, ScrollView } from "react-native";
import { inputArea } from "../../../constants/styles";

const PhoneInput = ({ phone, setPhone }) => {
  return (
    <ScrollView contentContainerStyle={inputArea.wrapper} keyboardShouldPersistTaps={'handled'} scrollEnabled={false} overflow={'visible'}>
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
    </ScrollView>
  );
};

export default PhoneInput;
