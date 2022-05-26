import { View, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  urlImage: string;
};

const Avatar = ({ urlImage }: Props) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: urlImage }} style={styles.avatarImage} />
    </View>
  );
};

export default Avatar;
