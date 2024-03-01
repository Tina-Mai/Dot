import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { buttons, icons } from '../../constants';

const AddFriendButton = () => {
  return (
    <TouchableOpacity>
        <View style={buttons.pillButtonWrapper}>
            <Image source={icons.addFriendWhite} resizeMode='contain' style={buttons.pillButtonIcon} />
            <Text style={buttons.pillButtonText}>add friend</Text>
        </View>
    </TouchableOpacity>
  );
};

export default AddFriendButton;
