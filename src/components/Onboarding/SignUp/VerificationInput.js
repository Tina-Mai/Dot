import React from "react";
import { View, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { inputArea } from "../../../constants/styles";
import NextButton from "../NextButton";

const VerificationInput = ({ code, setCode, navigation }) => {
    return (
        <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
            <ScrollView style={inputArea.wrapper} keyboardShouldPersistTaps={"handled"} scrollEnabled={false} style={{ overflow: "visible" }} >
                <View style={{ width: "100%" }}>
                <TextInput
                    style={inputArea.text}
                    placeholder={"XXX XXX"}
                    value={code}
                    onChangeText={(code) => setCode(code)}
                    clearButtonMode={"always"}
                    autoCapitalize={"none"}
                    inputMode={"numeric"}
                    autoFocus={true}
                />
                </View>
            </ScrollView>

            <NextButton navigation={navigation} nextScreen={'SignUp3'} />
        </KeyboardAvoidingView>
    );
};

export default VerificationInput;
