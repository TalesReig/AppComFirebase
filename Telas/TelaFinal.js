import { View, Button, ImageBackground, Text } from "react-native";

export default function TelaFinal({ route, navigation }) {
   const { email } = route.params;

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 30, fontWeight: 'bold' }}>Usuário logado!</Text>
        <Text style={{ fontSize: 18, marginBottom: 40, fontWeight: 'semi-bold' }}>Olá, {email}</Text>
        <Button title='    Sign Out    ' color='mediumvioletred' onPress={() => { navigation.navigate('Inicio') }} />
      </View>
   );
}