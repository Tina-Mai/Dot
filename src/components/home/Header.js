import React from "react";
import { View, Text } from "react-native";
import { fonts } from "../../constants/styles";
import { COLORS } from "../../constants/theme";

const Header = () =>  {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today).toLowerCase();

    return (
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
    )
}

export default Header;