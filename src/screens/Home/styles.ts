import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 42,
  },
  content: {
    marginTop: 42,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});
