import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, SHADOWS } from './constants/index'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const screen = {
    container: {
        flex: 1,
        backgroundColor: '#F6F5F1',
        paddingHorizontal: 16,
    },
    content: {
        paddingHorizontal: 30,
    }
}

export const fonts = {
    largeTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        lineHeight: 41,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 28,
    },
    icon: {
        fontSize: 25,
    }
}