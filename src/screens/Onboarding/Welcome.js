import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignUpButton from '../../components/Onboarding/Welcome/SignUpButton'
import LoginButton from '../../components/Onboarding/Welcome/LoginButton'
import { COLORS, screen, fonts } from '../../constants';

export default function Welcome({ navigation }) {
  return (
    <View style={screen.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            {/* title card */}
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                <View style={styles.circle} />
                <Text style={fonts.specialLargeTitle}>dot</Text>
            </View>
            <Text>dot is a simple little to-do list app. that's it.</Text>

        </View>

        {/* buttons */}
        <View style={{ alignItems: 'center' }}>
            <SignUpButton navigation={ navigation }/>
            <LoginButton navigation={ navigation }/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: COLORS.black,
  },
});