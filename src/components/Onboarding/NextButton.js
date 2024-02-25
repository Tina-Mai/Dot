import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { buttons } from '../../constants/styles';

const NextButton = ({ navigation, nextScreen }) => {  // TODO: will need to add another prop for backend (collecting text input contend and stuff)
    return (
        <KeyboardAvoidingView behavior={"padding"}>
            <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
                <View style={buttons.circleButtonWrapper}>
                    <Text style={buttons.circleButtonIcon}>→</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default NextButton;