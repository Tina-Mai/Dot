import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { COLORS, icons } from '../../constants';

const SendThoughtsButton = () => {
  const handlePress = () => {
    // add your logic here
  };

  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <Image source={icons.chat} resizeMode='contain' style={{ width: 18, height: 18 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>send thoughts</Text>
    </TouchableOpacity>
  );
};

export default SendThoughtsButton;
