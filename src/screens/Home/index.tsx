import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}
