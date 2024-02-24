import { Dimensions } from "react-native";
import { COLORS, CUSTOM_FONT, SHADOWS } from "./theme";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const screen = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  content: {
    paddingHorizontal: 14,
  },
};

export const fonts = {
  largeTitle: {
    fontSize: 35,
    fontWeight: "bold",
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
    fontWeight: "bold",
    paddingVertical: 10,
  },
  icon: {
    fontSize: 25,
  },
};

export const inputArea = {
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around", // as opposed to 'space-between'
    alignItems: "center",
  },
  text: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    borderRadius: 60,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
};

export const buttons = {
    circleButtonWrapper: {
        width: 55,
        height: 55,
        backgroundColor: COLORS.accent,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
      },
      circleButtonIcon: {
        fontSize: 25,
        color: COLORS.white,
      },
      textButtonWrapper: {
        width: "100%",
        backgroundColor: COLORS.black,
        borderRadius: 60,
        flexDirection: "row",
        justifyContent: "space-around", // as opposed to 'space-between'
        justifyContent: "center",
        alignItems: "center",
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
      },
      textButtonText: {
        width: "100%",
        textAlign: "center",
        fontSize: 18,
        fontWeight: 500,
        color: COLORS.white,
      },
}