// functional component for each item in the todo list

import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SHADOWS } from '../constants'

const Task = (props) => {
    const [isCompleted, setIsCompleted] = useState()

    return (
        <View style={{ opacity: isCompleted ? 0.6 : 1 }}>
            <View style={styles.item}>

                <View style={styles.itemLeft}>
                    <TouchableOpacity style={isCompleted ? styles.squareComplete : styles.square} onPress={() => setIsCompleted(!isCompleted)}></TouchableOpacity>
                    <Text style={styles.itemText}>{props.text}</Text>
                </View>

                <TouchableOpacity onPress={() => props.deleteHandler(props.index)}>
                    <Text style={styles.deleteIcon}>×</Text>
                </TouchableOpacity>

            </View>
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
        shadowColor: '#2E303F',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
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
        borderColor: '#B6594C',
        borderWidth: 2,
        borderRadius: 15,
        marginRight: 15,
    },
    squareComplete: {
        width: 24,
        height: 24,
        backgroundColor: '#B6594C',
        borderRadius: 15,
        marginRight: 15,
    },
    deleteIcon: {
        fontSize: 20,
    }
})

export default Task