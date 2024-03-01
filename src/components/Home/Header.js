import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, fonts, profile, icons } from "../../constants";

const Header = ({ navigation }) =>  {
    const today = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today).toLowerCase();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            {/* text */}
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={fonts.specialLargeTitle}>hi </Text>
                    <Text style={fonts.specialLargeTitleItalic}>tina</Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: 25 }}>
                    <Text style={{ color: COLORS.gray }}>today is </Text>
                    <Text style={{ color: COLORS.accent, fontWeight: "bold" }}>{formattedDate}</Text>
                </View>
                <Text style={fonts.specialSectionTitle}>to-do</Text>
            </View>

            {/* buttons */}
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 25, gap: 15 }}>
                {/* friends icon */}
                <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
                    <Image source={icons.friends} resizeMode='contain' style={{ width: 30, height: 30 }} />
                </TouchableOpacity>

                {/* settings icon */}
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Image source={icons.settings} resizeMode='contain' style={{ width: 30, height: 30 }} />
                </TouchableOpacity>

                {/* profile pic */}
                {/* <TouchableOpacity style={{ paddingVertical: 20 }} onPress={() => navigation.navigate('Settings')}>
                    <View style={profile.small} />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Header;