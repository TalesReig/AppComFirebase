import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../Firebase'

export default function Formulario({ navigation }) {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [repeatSenha, setRepeatSenha] = useState('');

   const handleSingUp = () => {
      if (senha == repeatSenha){
         createUserWithEmailAndPassword(auth, email, senha)
         .then(() => {
            navigation.navigate('Inicio')
         })
         .catch((error) => {
            alert(error.message)
         })
      }else{
         alert('As senhas devem ser iguais !!!')
      }
   }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>LOGIN</Text>
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(senha) => setSenha(senha)}
      />
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Repitir Senha"
        secureTextEntry={true}
        onChangeText={(repeatSenha) => setRepeatSenha(repeatSenha)}
      />
      <Button 
         title='Cadastrar' 
         color='blue'
         onPress={handleSingUp}
      />
      <Button title='Voltar' color='blue' onPress={() => { navigation.navigate('Formulario') }} />
    </View>
  );
}
