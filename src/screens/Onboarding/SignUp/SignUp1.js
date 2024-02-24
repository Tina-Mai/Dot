// sign up: enter phone number screen

import React from 'react'
import { View, Text } from 'react-native'
import { screen, fonts } from '../../../constants/styles'
import NextButton from '../../../components/Onboarding/NextButton'
import BackButton from '../../../components/Onboarding/BackButton'
import { COLORS } from '../../../constants/theme'

export default function SignUp1({ navigation }) {
    return (
        <View style={screen.container}>
            <View style={{ flex: 1 }}>
                {/* back button */}
                <BackButton navigation={navigation} prevScreen={'Welcome'}/>

                {/* header */}
                <View style={{ flexDirection: 'row', flexWrap: true, paddingTop: 40 }}>
                    <Text style={fonts.specialLargeTitle}>what's your </Text>
                    <Text style={fonts.specialLargeTitleItalic}>phone</Text>
                    <View style={{ marginTop: -30 }}>
                        <Text style={fonts.specialLargeTitleItalic}>number?</Text>
                    </View>
                </View>
                <Text style={{ color: COLORS.gray }}>we'll text you a verification code. message and data rates may apply.</Text>
            
                {/* text input */}

            </View>

            {/* next button */}
            <View style={{ alignItems: 'right', justifyContent: 'space-between', flexDirection: 'row' }}>
                <View />
                <NextButton navigation={navigation} nextScreen={'SignUp2'} />
            </View>
        </View>
    )
}