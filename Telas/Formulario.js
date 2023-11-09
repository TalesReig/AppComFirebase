import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function TelaInicial({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>LOGIN</Text>
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Email"
      />
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Repitir Senha"
        secureTextEntry={true}
      />
      <Button title='Cadastrar' color='blue' style={{ width: 100, height: 40, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }} onPress={() => { navigation.navigate('Formulario') }} />
      <Button title='Voltar' color='blue' style={{ width: 100, height: 40, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }} onPress={() => { navigation.navigate('Formulario') }} />
    </View>
  );
}
