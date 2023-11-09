import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth"; 
import { getAuth } from "firebase/auth";


export default function EsqueceuSenha({ navigation }) {
  const [email, setEmail] = useState('');
  const [resetPasswordSent, setResetPasswordSent] = useState(false); 

  const handleResetPassword = () => {
    const auth = getAuth(); 

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetPasswordSent(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {resetPasswordSent ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, textAlign: 'center', margin: 10}}>
            Um link para redefinir a senha foi enviado para o email: {email}
          </Text>
          <Text style={{ fontWeight: '600', fontSize: 18, textAlign: 'center', margin: 10, marginBottom: 40,  }}>
            Verifique sua caixa de entrada.
          </Text>
          <View style={{  gap: 10, marginBottom: 20,  width: 170, alignSelf: 'center'}}>
            <Button title='Voltar ao Login' color='mediumvioletred' onPress={() => {
              navigation.navigate('Inicio'); 
            }} />
          </View>
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: '500' }}>
          Digite o e-mail da conta que deseja recuperar a senha:
          </Text>
          <TextInput
            style={{
              width: 300,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 25,
              paddingLeft: 10,
            }}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
          <View style={{ gap: 10, marginBottom: 20,  width: 170, alignSelf: 'center'}}>
            <Button title='Redefinir Senha' color="mediumvioletred" onPress={handleResetPassword} />
            <Button title='Voltar ao Login' color='mediumvioletred' onPress={() => {
              navigation.navigate('Inicio'); 
            }} />
          </View>
        </View>
      )}
    </View>
  );
}
