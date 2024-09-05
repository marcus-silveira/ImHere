import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import "react-native-get-random-values";
import { Participant } from "../../components/Participant";
import React, { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante já adicionado",
        "Já existe um participante na lista com este nome"
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Removido"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={(text) => setParticipantName(text)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.ButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda. Adicione participantes à sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
