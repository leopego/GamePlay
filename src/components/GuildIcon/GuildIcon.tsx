import { Text, View, Image } from "react-native";
import { styles } from "./styles";

type Props = {};

const GuildIcon = ({}: Props) => {
  return (
    <Image
      source={{
        uri: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-768x768.png",
      }}
      style={styles.image}
      resizeMode="cover"
    />
  );
};

export default GuildIcon;
