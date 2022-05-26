import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "../screens/SignIn/styles";
import Icon from "../assets/discord.png";

type Props = TouchableOpacityProps & {
  title: string;
};

const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.mainButton} {...rest}>
      <View style={styles.iconContainer}>
        <Image source={Icon} />
      </View>
      <View style={styles.textButtonContainer}>
        <Text style={styles.textButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
