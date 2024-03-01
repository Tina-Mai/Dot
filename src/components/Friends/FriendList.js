import React from 'react';
import { SectionList, Text, View } from 'react-native';
import Friend from './Friend';

const FriendList = ({ friendsList }) => {
    const friendsSection = [{title: 'Friends', data: [friendsList]}]

    return (
        <SectionList
        style={{ paddingTop: 30, overflow: 'visible' }}
        sections={friendsSection}
        // keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
            return (
              <Friend
                name={"mason wang"} // TODO: change obviously
                numTodo={2}  // TODO: change obviously
                numCompleted={5}  // TODO: change obviously
              />
            );
        }}
        />
    );
};

export default FriendList;
