import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Picker,
  TouchableOpacity,
  Alert
} from "react-native";
import DatePicker from "react-native-datepicker";
import { Platform } from "@unimodules/core";
import { useScreens } from "react-native-screens";
import api from "../services/api";
export default function LivroCad() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [volume, setVolume] = useState("");
  const [dataPublicacao, SetDataPublicacao] = useState("");
  const [idGenero, setIdGenero] = useState("");
  const [generos, setGeneros] = useState([]);
  const [idEditora, setIdEditora] = useState("");
  const [editoras, setEditoras] = useState([]);
  const [idAutor, setIdAutor] = useState("");
  const [autores, setAutores] = useState([]);

  function carregarCombos() {
    async function carregarGeneros() {
      const response = await api.get("/generos");
      setGeneros(response.data);
    }
    carregarGeneros();
    async function carregarEditoras() {
      const response = await api.get("/editoras");
      setEditoras(response.data);
    }
    carregarEditoras();
    async function carregarAutores() {
      const response = await api.get("/autores");
      setAutores(response.data);
    }
    carregarAutores();
  }

  async function handleSubmit() {
    try {
      if (idGenero === "") {
        Alert.alert("Selecione um genero");
      } else if (idEditora === "") {
        Alert.alert("Selecione uma editora");
      } else if (idAutor === "") {
        Alert.alert("Selecione um autor");
      } else {
        const response = await api.post("/livros", {
          nome,
          valor,
          volume,
          dataPublicacao,
          genero: { id: idGenero },
          editora: { id: idEditora },
          autor: { id: idAutor }
        });

        Alert.alert("Livro salvo com sucesso");
        setNome("");
        setValor("");
        setVolume("");
        SetDataPublicacao("");
        setIdGenero("");
        setIdEditora("");
        setIdAutor("");
      }
    } catch (error) {
      console.log(response);
      Alert.alert("Erro ao realizar a operação, tente novamente mais tarde");
    }
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS == "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Text style={styles.titulo}>Cadastro de Livro</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome: *</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do livro"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
          onChange={carregarCombos}
        />
        <Text style={styles.label}>Valor: *</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor do livro"
          placeholderTextColor="#999"
          value={valor}
          keyboardType={"decimal-pad"}
          onChangeText={setValor}
        />
        <Text style={styles.label}>Volume: *</Text>
        <TextInput
          style={styles.input}
          placeholder="Volume do livro"
          placeholderTextColor="#999"
          value={volume}
          keyboardType={"numeric"}
          onChangeText={setVolume}
        />
        <Text style={styles.label}>Data de publicação: *</Text>
        <DatePicker
          style={{ width: "100%" }}
          date={dataPublicacao}
          mode="date"
          placeholder="Data da publicação do lirvo"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "relative",
              left: 0,
              top: 0,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 0,
              marginBottom: 5
            }
          }}
          onDateChange={date => {
            SetDataPublicacao(date);
          }}
        />

        <Text style={styles.label}>Genero: *</Text>
        <Picker selectedValue={idGenero} onValueChange={setIdGenero}>
          <Picker.Item label="Selecione um genero" value="" />
          {generos.map(genero => {
            return (
              <Picker.Item
                key={genero.id}
                label={genero.descricao}
                value={genero.id}
              />
            );
          })}
        </Picker>
        <Text style={styles.label}>Editora: *</Text>
        <Picker selectedValue={idEditora} onValueChange={setIdEditora}>
          <Picker.Item label="Selecione uma editora" value="" />
          {editoras.map(editora => {
            return (
              <Picker.Item
                key={editora.id}
                label={editora.nome}
                value={editora.id}
              />
            );
          })}
        </Picker>
        <Text style={styles.label}>Autor: *</Text>
        <Picker selectedValue={idAutor} onValueChange={setIdAutor}>
          <Picker.Item label="Selecione um autor" value="" />
          {autores.map(autor => {
            return (
              <Picker.Item key={autor.id} label={autor.nome} value={autor.id} />
            );
          })}
        </Picker>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    fontSize: 20
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
    borderRadius: 2
  },
  botao: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
