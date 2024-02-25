import React from "react";
import { View, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { inputArea } from "../../../constants/styles";
import NextButton from "../NextButton";

const PhoneInput = ({ phone, setPhone, navigation }) => {
    return (
        <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
            <ScrollView keyboardShouldPersistTaps={'handled'} scrollEnabled={false} style={{ overflow: 'visible' }}>
                <View style={inputArea.wrapper}>
                    <View style={{ width: "100%" }}>
                        <TextInput
                        style={inputArea.text}
                        placeholder={"+1  XXX XXX XXX"}
                        value={phone}
                        onChangeText={(phone) => setPhone(phone)}
                        clearButtonMode={"always"}
                        autoCapitalize={"none"}
                        inputMode={"tel"}
                        autoComplete={"tel"}
                        autoFocus={true}
                        />
                    </View>
                </View>
            </ScrollView>

            <NextButton navigation={navigation} nextScreen={'SignUp2'} />
        </KeyboardAvoidingView>
    );
};

export default PhoneInput;
