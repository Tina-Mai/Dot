// sign up: name screen

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { screen, fonts } from '../../../constants/styles'
import NextButton from '../../../components/Onboarding/NextButton'
import BackButton from '../../../components/Onboarding/BackButton'
import NameInput from '../../../components/Onboarding/SignUp/NameInput'
import { COLORS } from '../../../constants/theme'

export default function SignUp2({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <View style={screen.container}>
            {/* back button */}
            <BackButton navigation={navigation} prevScreen={'SignUp2'}/>

            {/* header */}
            <View style={{ flexDirection: 'row', flexWrap: true, paddingTop: 40 }}>
                <Text style={fonts.specialLargeTitle}>what's your </Text>
                <Text style={fonts.specialLargeTitleItalic}>name?</Text>
            </View>
            <Text style={{ color: COLORS.gray, paddingBottom: 30 }}>so we know what to call you ;)</Text>

            {/* text input */}
            <NameInput firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} navigation={navigation} />
        </View>
    )
}