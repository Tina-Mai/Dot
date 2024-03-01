import React from 'react'
import { View, Text } from 'react-native'
import BackButton from '../components/Onboarding/BackButton'
import DeleteAccountButton from '../components/Settings/DeleteAccountButton'
import SendThoughtsButton from '../components/Settings/SendThoughtsButton'
import { COLORS, screen, profile, fonts } from '../constants'

// TODO: change PROFILE PIC, NAME, and JOINED DATE based on backend

export default function Settings({ navigation }) {
    // TODO: change this based on date that user joined
    const today = new Date();
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today).toLowerCase();

    return (
        <View style={screen.container}>
            <View style={{ flex: 1 }}>
                {/* back button */}
                <BackButton navigation={navigation} prevScreen={'Home'}/>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {/* profile pic */}
                    <View style={{ paddingTop: 25, paddingBottom: 10 }}>
                        <View style={profile.large} />
                    </View>
                    
                    {/* name */}
                    <Text style={fonts.specialSectionTitle}>tina mai</Text> 

                    {/* joined date */}
                    <View style={{ flexDirection: 'row', flexWrap: true, paddingTop: 10 }}>
                        <Text>completing dots since </Text>
                        <Text style={{ color: COLORS.accent, fontWeight: "bold" }}>{formattedDate}</Text>
                    </View>

                    {/* buttons */}
                    <View style={{ padding: 50, gap: 20 }}>
                        <SendThoughtsButton />
                        <DeleteAccountButton />
                    </View>

                </View>
            </View>

            {/* footer */}
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 15 }}>
                <Text style={fonts.specialSectionTitle}>dot</Text>
                <Text>v1.1.1</Text>
                <Text>made in new york city</Text>
            </View>
        </View>
    )
}