// sign up: verification code screen

import React from 'react'
import { View, Text } from 'react-native'
import { screen, fonts } from '../../../constants/styles'
import NextButton from '../../../components/Onboarding/NextButton'
import BackButton from '../../../components/Onboarding/BackButton'

export default function SignUp2({ navigation }) {
    return (
        <View style={screen.container}>
            <View style={{ flex: 1 }}>
                {/* back button */}
                <BackButton navigation={navigation} prevScreen={'SignUp1'}/>

                {/* header */}
                <View style={{ flexDirection: 'row', flexWrap: true, paddingTop: 40 }}>
                    <Text style={fonts.specialLargeTitle}>enter your </Text>
                    <View style={{ marginTop: -30 }}>
                        <Text style={fonts.specialLargeTitleItalic}>verification code</Text>
                    </View>
                </View>
            </View>

            {/* next button */}
            <View style={{ alignItems: 'right', justifyContent: 'space-between', flexDirection: 'row' }}>
                <View />
                <NextButton navigation={navigation} nextScreen={'SignUp2'} />
            </View>
        </View>
    )
}