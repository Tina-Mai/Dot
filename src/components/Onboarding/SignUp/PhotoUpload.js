import React from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from "react-native";
import NextButton from "../NextButton";
import { fonts, profile } from "../../../constants";

const PhotoUpload = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }} >
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, paddingVertical: 20 }}>
                <View style={profile.large}>
                    <Text style={fonts.icon}>+</Text>
                </View>
            </TouchableOpacity>

            <NextButton navigation={navigation} nextScreen={'Home'} />
        </KeyboardAvoidingView>
    );
};

export default PhotoUpload;