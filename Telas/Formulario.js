import { useState } from "react";
import { ImageBackground, View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Formulario({navigation}){
   const [nome, setNome] = useState('');
   const [telefone, setTelefone] = useState('');
   const [cpf, setCpf] = useState('');

   const handleTextChange = (newText) => {
      // Filtra os caracteres não numéricos
      const number = newText.replace(/[^0-9]/g, '');
      return number;
    };

   return(
      <ImageBackground
         style={{ flex: 1  }}
         source={ require('../assets/background.jpg') }>
         <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
               Informe seus dados
         </Text>
         <View 
            style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: 'purple', marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Nome:</Text>
            <TextInput style={{ width: '85%', marginLeft: 10 }} onChangeText={ (nome) => setNome(nome)}/> 
         </View>
         <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: 'purple', marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Telefone:</Text>
            <TextInput style={{ width: '80%', marginLeft: 10 }} onChangeText={ (telefone) => setTelefone(handleTextChange(telefone))} value={ telefone }/> 
         </View>
         <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: 'purple', marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>CPF:</Text>
            <TextInput style={{ width: '88%', marginLeft: 10 }} onChangeText={ (cpf) => setCpf(handleTextChange(cpf))} value={ cpf }/> 
         </View>
         <View style={{ width: '100%', marginTop: 20, alignItems: 'center' }}>
            <Button title="Confirmar" color='purple' onPress={()=> navigation.navigate('Fim', {nome: nome, telefone: telefone, cpf: cpf})}/>
         </View>
      </ImageBackground>
   );
}