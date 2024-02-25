// sign up: profile pic

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { screen, fonts } from '../../../constants/styles'
import NextButton from '../../../components/Onboarding/NextButton'
import BackButton from '../../../components/Onboarding/BackButton'
import { COLORS } from '../../../constants/theme'

export default function SignUp2({ navigation }) {
    const [firstName, setFirstName] = useState("");

    return (
        <View style={screen.container}>
            <View style={{ flex: 1 }}>
                {/* back button */}
                <BackButton navigation={navigation} prevScreen={'SignUp3'}/>

                {/* header */}
                <View style={{ flexDirection: 'row', flexWrap: true, paddingTop: 40 }}>
                    <Text style={fonts.specialLargeTitle}>add a </Text>
                    <Text style={fonts.specialLargeTitleItalic}>profile pic</Text>
                </View>
                <Text style={{ color: COLORS.gray, paddingBottom: 30 }}>say cheese  📸</Text>

                {/* photo input */}
            </View>

            {/* next button */}
            <View style={{ alignItems: 'right', justifyContent: 'space-between', flexDirection: 'row' }}>
                <View />
                <NextButton navigation={navigation} nextScreen={'Home'} />
            </View>
        </View>
    )
}