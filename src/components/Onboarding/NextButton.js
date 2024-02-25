import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { buttons } from "../../constants/styles";

const NextButton = ({ navigation, nextScreen }) => {
    // TODO: will need to add another prop for backend (collecting text input contend and stuff)
    return (
        <View style={{ alignItems: 'right', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 15}}>
            <View />
            <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
                <View style={buttons.circleButtonWrapper}>
                <Text style={buttons.circleButtonIcon}>→</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default NextButton;
