import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";


export default function TelaInicial({ navigation }) {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');

   const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, senha)
         .then((userCredential) =>{
            const user = userCredential.user;
            navigation.navigate('Fim', { email: user.email });
         })
         .catch((error) => {
            const eerorMessage = error.message;

            alert(eerorMessage);
         });
   };

   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>LOGIN</Text>
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 3, paddingLeft: 10 }}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(senha) => setSenha(senha)}
      />
      <Text style={{ color: 'blue', textDecorationLine: 'underline', 
            alignSelf: 'flex-start', marginStart: 34, marginBottom: 20} } 
            onPress={() => { navigation.navigate('Esqueceu') }}>Esqueceu a senha?</Text>
      
      <Button title='     LOGIN     ' color='blue' onPress={ handleLogin } />
      <Text style={{ marginTop: 10 }}>Não possui conta? <Text style={{ color: 'blue', textDecorationLine: 'underline' } } onPress={() => { navigation.navigate('Cadastrar') }}>Cadastrar</Text></Text>
    </View>
  );
}
