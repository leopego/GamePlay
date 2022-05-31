import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { categories } from "../../utils/categories";
import GuildIcon from "../GuildIcon/GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import ListDivider from "../ListDivider/ListDivider";

export type GuildProps = {
  id: string;
  name: string;
  icon?: React.FC<SvgProps>;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  data: AppointmentProps;
};

const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;

  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg
                fill={owner ? theme.colors.primary : theme.colors.on}
              />
              <Text
                style={[
                  styles.player,
                  { color: owner ? theme.colors.primary : theme.colors.on },
                ]}
              >
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Appointment;
