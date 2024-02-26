import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, fonts, profile, dot, listItem } from '../../constants';

// TODO: backend to get friends list, including name, # of todo tasks, and # of completed tasks
// TODO: some way to add a friend on the app
const Friend = ({ name, numTodo, numCompleted }) => {
  return (
    <View style={[listItem.wrapper, { alignItems: 'left' }]}>
        {/* header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <View style={profile.small} />
            <Text style={fonts.specialSectionTitle}>{name}</Text>
        </View>

        {/* divider line */}
        <View style={{ backgroundColor: COLORS.gray, opacity: 0.6, width: '100%', height: 0.5, marginTop: 10, marginBottom: 20 }} />

        {/* status */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
            {/* todo count */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={dot.todo}/>
                <Text>{numTodo}</Text>
            </View>

            {/* completed count */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={dot.complete}/>
                <Text>{numCompleted}</Text>
            </View>
        </View>
    </View>
  );
};

export default Friend;