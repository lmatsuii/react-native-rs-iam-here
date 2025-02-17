import React from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ["Leonardo", "Hideki", "Matsui", "Isabela", "Toto", "A", "S", "D", "Q", "W", "E", "R", "Z", "X", "V"];
  function handleParticipantAdd() {
    console.log("Voce clicou");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Voce clicou no botao de remover ${name}`);
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
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove("J")}
        ></Participant>
        )}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>Vazio</Text>
        )}
      />

    </View>
  );
}
