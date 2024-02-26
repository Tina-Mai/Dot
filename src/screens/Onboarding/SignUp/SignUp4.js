// sign up: profile pic

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { screen, fonts } from '../../../constants/styles'
import BackButton from '../../../components/Onboarding/BackButton'
import { COLORS } from '../../../constants/theme'
import PhotoUpload from '../../../components/Onboarding/SignUp/PhotoUpload'

export default function SignUp2({ navigation }) {
    return (
        <View style={screen.container}>
            {/* back button */}
            <BackButton navigation={navigation} prevScreen={'SignUp3'}/>

            {/* header */}
            <View style={{ flexDirection: 'row', flexWrap: true, paddingTop: 40 }}>
                <Text style={fonts.specialLargeTitle}>add a </Text>
                <Text style={fonts.specialLargeTitleItalic}>profile pic</Text>
            </View>
            <Text style={{ color: COLORS.gray, paddingBottom: 30 }}>say cheese  📸</Text>

            {/* photo input */}
            <PhotoUpload navigation={navigation} />
        </View>
    )
}