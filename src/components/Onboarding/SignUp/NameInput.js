import React from "react";
import { View, TextInput, ScrollView } from "react-native";
import { inputArea } from "../../../constants/styles";

const NameInput = ({ firstName, setFirstName, lastName, setLastName }) => {
  return (
    <View style={{ rowGap: 15 }}>
        <ScrollView contentContainerStyle={inputArea.wrapper} keyboardShouldPersistTaps={'handled'} scrollEnabled={false} overflow={'visible'}>
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
        </ScrollView>

        <ScrollView contentContainerStyle={inputArea.wrapper} keyboardShouldPersistTaps={'handled'} scrollEnabled={false} overflow={'visible'}>
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
    </View>
    
  );
};

export default NameInput;
