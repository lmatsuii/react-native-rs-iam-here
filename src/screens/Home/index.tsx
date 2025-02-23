import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipatName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Ja existe um paritcipante na list com esse nome"
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipatName("");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            participants.filter((participants) => participants !== name)
          ),
      },
      {
        text: "Nao",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Text key={1} style={styles.textOne}>
        Nome do evento
      </Text>
      <Text key={2} style={styles.textTwo}>
        Sexta, 5 de Novembro de 2022.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipatName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
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
          ></Participant>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Vazio</Text>
        )}
      />
    </View>
  );
}
