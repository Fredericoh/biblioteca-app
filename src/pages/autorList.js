import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import api from "../services/api";

export default function AutorList() {
  const [autores, setAutores] = useState([]);

  async function carregarAutores() {
    const response = await api.get("/autores");
    setAutores(response.data);
  }
  carregarAutores();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de autores</Text>
      <FlatList
        data={autores}
        style={styles.lista}
        keyExtractor={autor => `${autor.id}`}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.card}>
              <Text style={styles.label}>Id: {item.id}</Text>
              <Text style={styles.label}>Nome: {item.nome}</Text>
              {/* <Text style={styles.label}>Sexo: {item.sexo.descricao}</Text> */}
              <TouchableOpacity
                onPress={async () => {
                  const id = item.id;
                  await api.delete(`/autores/${id}`);
                }}
              >
                <Text style={styles.botaoTexto}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#0000FF",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  lista: {
    paddingHorizontal: 20
  },
  titulo: {
    fontSize: 18,
    marginTop: 30,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center"
  },
  label: {
    fontWeight: "bold",
    color: "#444"
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10
  },
  botaoTexto: {
    color: "#f05a5b",
    fontWeight: "bold",
    fontSize: 16
  }
});
