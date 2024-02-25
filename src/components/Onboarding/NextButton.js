import React from 'react';
import { Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { buttons } from '../../constants/styles';

const NextButton = ({ navigation, nextScreen }) => {  // TODO: will need to add another prop for backend (collecting text input contend and stuff)
    return (
        <KeyboardAvoidingView behavior={"padding"} style={buttons.circleButtonWrapper} contentContainerStyle={{ paddingBottom: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
                <Text style={buttons.circleButtonIcon}>→</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default NextButton;