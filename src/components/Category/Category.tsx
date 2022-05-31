import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

const Category = ({ title, icon: Icon, checked = true, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
        <View style={checked ? styles.checked : styles.check} />
        <Icon width={48} height={48} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
