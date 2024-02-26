import React, { useState } from 'react'
import { View, Text } from 'react-native'
import BackButton from '../components/Onboarding/BackButton'
import FriendList from '../components/Friends/FriendList'
import { COLORS, screen, fonts } from '../constants'

export default function Friends({ navigation }) {
    const [friendsList, setFriendsList] = useState([]);

    return (
        <View style={screen.container}>
            {/* back button */}
            <BackButton navigation={navigation} prevScreen={'Home'}/>

            {/* header */}
            <View style={{ flexDirection: 'row' }}>
                <Text style={fonts.specialLargeTitle}>your </Text>
                <Text style={fonts.specialLargeTitleItalic}>friends</Text>
            </View>
            <Text style={{ color: COLORS.gray }}>see how your friends are doing with their to-dos</Text>

            {/* friend section */}
            <FriendList friends={friendsList} />
        </View>
    )
}