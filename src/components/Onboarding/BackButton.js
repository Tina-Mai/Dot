import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';

const NextButton = ({ navigation, prevScreen }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(prevScreen)}>
            <Text style={fonts.icon}>←</Text>
        </TouchableOpacity>
    );
}

export default NextButton;