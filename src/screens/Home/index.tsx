import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

function handleParticipantAdd() {
  console.log("BOTAO CLICADO");
}
export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.ButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Marcus" />
      <Participant name="Pedro" />
    </View>
  );
}
