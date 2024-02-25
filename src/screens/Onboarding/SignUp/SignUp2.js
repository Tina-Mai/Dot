// sign up: verification code screen

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { screen, fonts } from '../../../constants/styles'
import BackButton from '../../../components/Onboarding/BackButton'
import VerificationInput from '../../../components/Onboarding/SignUp/VerificationInput'
import { COLORS } from '../../../constants/theme'

export default function SignUp2({ navigation }) {
    const [code, setCode] = useState("");

    return (
        <View style={screen.container}>
            {/* back button */}
            <BackButton navigation={navigation} prevScreen={'SignUp1'}/>

            {/* header */}
            <View style={{ flexDirection: 'row', flexWrap: true, paddingTop: 40 }}>
                <Text style={fonts.specialLargeTitle}>enter your </Text>
                <View style={{ marginTop: -30 }}>
                    <Text style={fonts.specialLargeTitleItalic}>verification code</Text>
                </View>
            </View>
            <Text style={{ color: COLORS.gray, paddingBottom: 30 }}>didn't get a code?</Text>

            {/* text input */}
            <VerificationInput code={code} setCode={setCode} navigation={navigation} />
        </View>
    )
}