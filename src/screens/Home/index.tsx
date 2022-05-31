import { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import CategorySelect from "../../components/CategorySelect/CategorySelect";
import Profile from "../../components/Profile/Profile";
import ListHeader from "../../components/ListHeader/ListHeader";
import Appointment from "../../components/Appointment/Appointment";
import { FlatList } from "react-native-gesture-handler";
import ListDivider from "../../components/ListDivider/ListDivider";

const Home = () => {
  const [categorySelectedId, setCategorySelectedId] = useState("");
  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: undefined,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: undefined,
        owner: false,
      },
      category: "2",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

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
      <CategorySelect
        categorySelected={categorySelectedId}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  );
};

export default Home;
