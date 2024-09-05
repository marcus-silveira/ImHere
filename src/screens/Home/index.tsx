import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import "react-native-get-random-values";
import { v4 as uuid4 } from "uuid";
import { Participant } from "../../components/Participant";

function handleParticipantAdd() {
  console.log("BOTAO CLICADO");
}

function handleParticipantRemove(name: string) {
  console.log(`Removendo Participante ${name}`);
}

export function Home() {
  const participants = [
    "Pedro",
    "Marcus",
    "João",
    "Paulo",
    "Lucas",
    "Marcelo",
    "Ana",
    "Júlia",
    "Igor",
    "Tales",
  ];

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

      <ScrollView>
        {participants.map((participant) => (
          <Participant
            key={uuid4().toString()}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
