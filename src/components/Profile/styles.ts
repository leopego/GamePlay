import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  userContainer: {
    flexDirection: "row",
  },
  grettingText: {
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    marginRight: 5,
  },
  usernameText: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  messageText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
});
