import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SHADOWS } from "./constants/index";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const screen = {
  container: {
    flex: 1,
    backgroundColor: "#F6F5F1",
    paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 14,
  },
};

export const fonts = {
  largeTitle: {
    fontSize: 34,
    fontWeight: "bold",
    lineHeight: 41,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
  },
  icon: {
    fontSize: 25,
  },
};

export const components = {
  inputAreaWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around", // as opposed to 'space-between'
    alignItems: "center",
  },
  inputAreaText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    borderRadius: 60,
    // width: '75%',
    shadowColor: "#2E303F",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
};
