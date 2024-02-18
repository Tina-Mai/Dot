// functional component for each item in the todo list

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circular}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // will push items on left side and right side to opposite ends
        justifyContent: 'space-between', 
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        // if it gets too long, wrap to next line
        flexWrap: 'wrap', 
    },
    itemText: {
        maxWidth: '80%',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#B6594C',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#B6594C',
        borderWidth: 2,
        borderRadius: 5,
    },
})

export default Task