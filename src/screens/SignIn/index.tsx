import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import BackgroundImage from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <Text style={styles.title}>
        Conecte-se {"\n"} e organize suas {"\n"}jogatinas
      </Text>
      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
      </Text>
      <ButtonIcon
        title={"Entrar com discord"}
        onPress={() => {
          console.log("Entrar com discord");
        }}
      />
    </View>
  );
};

export default SignIn;
