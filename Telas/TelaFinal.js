import { View, Button, ImageBackground, Text } from "react-native";

export default function TelaFinal({navigation, route}){
   return(
      <ImageBackground
         style={{ flex: 1  }}
         source={ require('../assets/background.jpg') }>
         <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
               Dados do Usuário
         </Text>
      </ImageBackground>
   );
}