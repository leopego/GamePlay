import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import BackgroundImage from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <Text style={styles.title}>
        Conecte-se {"\n"} e organize suas {"\n"}jogatinas
      </Text>
      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
      </Text>
      <ButtonIcon title={"Entrar com discord"} onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
