import { Dimensions } from 'react-native';
import { COLORS, CUSTOM_FONT, SHADOWS } from './theme';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

export const screen = {
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 30,
    },
    content: {
        paddingHorizontal: 14,
    },
};

export const fonts = {
    largeTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingVertical: 15,
    },
    specialLargeTitle: {
        fontFamily: CUSTOM_FONT.regular,
        fontSize: 40,
        paddingVertical: 15,
    },
    specialLargeTitleItalic: {
        fontFamily: CUSTOM_FONT.italic,
        fontSize: 40,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    specialSectionTitle: {
        fontFamily: CUSTOM_FONT.regular,
        fontSize: 24,
        paddingVertical: 10,
    },
    icon: {
        fontSize: 25,
    },
};

export const inputArea = {
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around', // as opposed to 'space-between'
        alignItems: 'center',
    },
    text: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
        borderRadius: 60,
        shadowColor: SHADOWS.shadowColor,
        shadowOffset: SHADOWS.shadowOffset,
        shadowOpacity: SHADOWS.shadowOpacity,
        shadowRadius: SHADOWS.shadowRadius,
    },
};

export const buttons = {
    circleButtonWrapper: {
        width: 55,
        height: 55,
        backgroundColor: COLORS.accent,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: SHADOWS.shadowColor,
        shadowOffset: SHADOWS.shadowOffset,
        shadowOpacity: SHADOWS.shadowOpacity,
        shadowRadius: SHADOWS.shadowRadius,
    },
    circleButtonIcon: {
        fontSize: 25,
        color: COLORS.white,
    },
    textButtonWrapper: {
        width: '100%',
        backgroundColor: COLORS.black,
        borderRadius: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: SHADOWS.shadowColor,
        shadowOffset: SHADOWS.shadowOffset,
        shadowOpacity: SHADOWS.shadowOpacity,
        shadowRadius: SHADOWS.shadowRadius,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    textButtonText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 500,
        color: COLORS.white,
    },
    pillButtonWrapper: {
        height: 34,
        backgroundColor: COLORS.accent,
        borderRadius: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: SHADOWS.shadowColor,
        shadowOffset: SHADOWS.shadowOffset,
        shadowOpacity: SHADOWS.shadowOpacity,
        shadowRadius: SHADOWS.shadowRadius,
        paddingVertical: 7,
        paddingHorizontal: 15,
        gap: 10,
    },
    pillButtonIcon: {
        width: 16,
        height: 16,
    },
    pillButtonText: {
        // flex: 1,
        // width: "30%",
        textAlign: 'left',
        fontSize: 15,
        fontWeight: 500,
        color: COLORS.white,
    },
};

export const profile = {
    small: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.gray, // change this later
        borderRadius: 60,
        shadowColor: SHADOWS.shadowColor,
        shadowOffset: SHADOWS.shadowOffset,
        shadowOpacity: SHADOWS.shadowOpacity,
        shadowRadius: SHADOWS.shadowRadius,
    },
    large: {
        width: 125,
        height: 125,
        borderRadius: 125 / 2,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: SHADOWS.shadowColor,
        shadowOffset: SHADOWS.shadowOffset,
        shadowOpacity: SHADOWS.shadowOpacity,
        shadowRadius: SHADOWS.shadowRadius,
    },
};

export const dot = {
    todo: {
        width: 24,
        height: 24,
        borderColor: COLORS.accent,
        borderWidth: 2,
        borderRadius: 15,
        marginRight: 15,
    },
    complete: {
        width: 24,
        height: 24,
        backgroundColor: COLORS.accent,
        borderRadius: 15,
        marginRight: 15,
    },
};

export const listItem = {
    wrapper: {
        backgroundColor: COLORS.white,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: SHADOWS.shadowColor,
        shadowOffset: SHADOWS.shadowOffset,
        shadowOpacity: SHADOWS.shadowOpacity,
        shadowRadius: SHADOWS.shadowRadius,
    },
};
