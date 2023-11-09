import { View, Button, ImageBackground, Text } from "react-native";

export default function TelaFinal({navigation, route}){
   return(
      <ImageBackground
         style={{ flex: 1  }}
         source={ require('../assets/background.jpg') }>
         <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
               Dados do Usuário
         </Text>
         <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Nome:</Text>
            <Text style={{ marginLeft: 10 }}>{route.params.nome}</Text>
         </View>
         <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Telfone:</Text>
            <Text style={{ marginLeft: 10 }}>{route.params.telefone}</Text>
         </View>
         <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Cpf:</Text>
            <Text style={{ marginLeft: 10 }}>{route.params.cpf}</Text>
         </View>
         
         <View style={{ width: '100%', height: '70%', alignItems: 'center', justifyContent: 'flex-end'}}>
            <View style={{ width: 164, marginBottom: 10 }}>
               <Button title="Voltar" color='purple' onPress={()=> navigation.goBack()}/>
            </View>
            <Button title="Voltar para o Inicio" color='purple' onPress={()=> navigation.popToTop()}/>
         </View>
      </ImageBackground>
   );
}