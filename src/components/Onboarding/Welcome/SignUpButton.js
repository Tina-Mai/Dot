import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { buttons } from "../../../constants/styles"

const SignUpButton = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SignUp1')}>
            <View style={buttons.textButtonWrapper}>
                <Text style={buttons.textButtonText}>get started</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SignUpButton;