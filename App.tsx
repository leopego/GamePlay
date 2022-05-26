import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import SignIn from "./src/screens/SignIn";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0D133E" }}>
      <SignIn />
    </SafeAreaView>
  );
}
