import { COLORS, SHADOWS } from "../../../constants";

export const styles = {
    item: {
      backgroundColor: COLORS.white,
      padding: 15,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      // will push items on left side and right side to opposite ends
      justifyContent: "space-between",
      marginBottom: 20,
      shadowColor: COLORS.shadow,
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.08,
      shadowRadius: 20,
    },
    itemLeft: {
      flexDirection: "row",
      alignItems: "center",
      // if it gets too long, wrap to next line
      flexWrap: "wrap",
    },
    itemText: {
      maxWidth: "80%",
    },
    square: {
      width: 24,
      height: 24,
      borderColor: COLORS.accent,
      borderWidth: 2,
      borderRadius: 15,
      marginRight: 15,
    },
    squareComplete: {
      width: 24,
      height: 24,
      backgroundColor: COLORS.accent,
      borderRadius: 15,
      marginRight: 15,
    },
    deleteIcon: {
      fontSize: 20,
    },
  };
