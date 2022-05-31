import { useState } from "react";
import { View } from "react-native";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import CategorySelect from "../../components/CategorySelect/CategorySelect";
import Profile from "../../components/Profile/Profile";
import { styles } from "./styles";

const Home = () => {
  const [categorySelectedId, setCategorySelectedId] = useState("");

  const handleCategorySelect = (categoryId: string) => {
    categoryId === categorySelectedId
      ? setCategorySelectedId("")
      : setCategorySelectedId(categoryId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={categorySelectedId}
          setCategory={handleCategorySelect}
        />
      </View>
    </View>
  );
};

export default Home;
