import React from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from "react-native";
import NextButton from "../NextButton";
import { fonts } from "../../../constants/styles";
import { COLORS } from "../../../constants/theme";

const PhotoUpload = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }} >
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, paddingVertical: 20 }}>
                <View style={styles.circle}>
                    <Text style={fonts.icon}>+</Text>
                </View>
            </TouchableOpacity>

            <NextButton navigation={navigation} nextScreen={'Home'} />
        </KeyboardAvoidingView>
    );
};

export default PhotoUpload;

const styles = StyleSheet.create({
    circle: {
        width: 125,
        height: 125,
        borderRadius: 125 / 2,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
    },
  });