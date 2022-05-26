import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

const screenWidth = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D133E",
    paddingHorizontal: 50,
  },
  backgroundImage: {
    width: screenWidth,
    resizeMode: "cover",
  },
  title: {
    color: "#DDE3F0",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 16,
    lineHeight: 40,
    fontFamily: theme.fonts.title700,
  },
  subtitle: {
    color: "#DDE3F0",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 48,
    fontFamily: theme.fonts.title500,
  },
  mainButton: {
    width: "100%",
    height: 56,
    borderRadius: 6,
    backgroundColor: "#E51C44",
    flexDirection: "row",
  },
  iconContainer: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#991F36",
  },
  textButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#DDE3F0",
    fontSize: 15,
    textAlign: "center",
  },
});
