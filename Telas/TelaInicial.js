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
      <Text style={{ color: 'blue', textDecorationLine: 'underline' } } onPress={() => { navigation.navigate('Formulario') }}>Esqueceu a Senha</Text>
      <Button title='LOGIN' color='blue' onPress={() => { navigation.navigate('Formulario') }} />
      <Text style={{ marginTop: 10 }}>Não possui conta? <Text style={{ color: 'blue', textDecorationLine: 'underline' } } onPress={() => { navigation.navigate('Formulario') }}>Cadastrar</Text></Text>
    </View>
  );
}
