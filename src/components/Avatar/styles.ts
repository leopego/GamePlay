import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 22,
    backgroundColor: theme.colors.secondary60,
  },
  avatarImage: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
});
