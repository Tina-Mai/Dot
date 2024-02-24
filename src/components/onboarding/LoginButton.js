import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const LoginButton = () => {
    return (
        <View style={{ flexDirection: "row", paddingVertical: 16 }}>
            <Text>already have an account? </Text>
            <TouchableOpacity>
                <Text style={{ fontWeight: "bold" }}>log in →</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginButton;