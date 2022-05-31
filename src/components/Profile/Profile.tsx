import { Text, View } from "react-native";
import Avatar from "../Avatar/Avatar";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import { styles } from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage={"https://github.com/leopego.png"} />
      <View>
        <View style={styles.userContainer}>
          <Text style={styles.grettingText}>Olá,</Text>
          <Text style={styles.usernameText}>Leonardo</Text>
        </View>
        <Text style={styles.messageText}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};

export default Profile;
