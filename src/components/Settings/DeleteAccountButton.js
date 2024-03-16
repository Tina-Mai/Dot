import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { icons } from '../../constants';

const DeleteAccountButton = () => {
    const handlePress = () => {
        // add logic here
    };

    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <Image source={icons.x} resizeMode='contain' style={{ width: 18, height: 18 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>delete account</Text>
        </TouchableOpacity>
    );
};

export default DeleteAccountButton;
