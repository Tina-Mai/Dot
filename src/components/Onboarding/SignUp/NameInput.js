import React from "react";
import { View, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { inputArea } from "../../../constants";
import NextButton from "../NextButton";

const NameInput = ({ firstName, setFirstName, lastName, setLastName, navigation }) => {
    return (
        <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
            <ScrollView keyboardShouldPersistTaps={"handled"} scrollEnabled={false} style={{ overflow: 'visible' }} >
                <View style={inputArea.wrapper}>
                    <View style={{ width: "100%" }}>
                    <TextInput
                        style={inputArea.text}
                        placeholder={"first name"}
                        value={firstName.toLowerCase()}
                        onChangeText={(firstName) => setFirstName(firstName.toLowerCase())}
                        autoCapitalize="none"
                        autoComplete="given-name"
                        autoFocus={true}
                    />
                    </View>
                </View>

                <View style={{ height: 15 }} />

                <View style={inputArea.wrapper}>
                    <View style={{ width: "100%" }}>
                    <TextInput
                        style={inputArea.text}
                        placeholder={"last name"}
                        value={lastName.toLowerCase()}
                        onChangeText={(lastName) => setLastName(lastName.toLowerCase())}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        autoComplete={"family-name"}
                    />
                    </View>
                </View>
            </ScrollView>

            <NextButton navigation={navigation} nextScreen={'SignUp4'} />
        </KeyboardAvoidingView>
    );
};

export default NameInput;
