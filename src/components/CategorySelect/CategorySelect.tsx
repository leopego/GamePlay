import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableOpacityProps,
} from "react-native";
import { categories } from "../../utils/categories";
import Category from "../Category/Category";
import { styles } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

const CategorySelect = ({ categorySelected, setCategory }: Props) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
