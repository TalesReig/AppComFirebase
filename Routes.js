import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EsqueceuSenha from './Telas/EsqueceuSenha';
import TelaInicial from './Telas/TelaInicial';
import TelaCadastrar from './Telas/TelaCadastrar';
import TelaFinal from './Telas/TelaFinal';

const Stack = createStackNavigator();

export default function Routes() {
   return(
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen 
               name='Inicio' 
               component={ TelaInicial } 
               options={{ title:'Seja Bem-Vindo!' }}
            >   
            </Stack.Screen>
            <Stack.Screen 
               name='Cadastrar' 
               component={ TelaCadastrar }
               options={{ title:'Cadastro de Usuário:' }}
            >
            </Stack.Screen>
            <Stack.Screen 
               name='Esqueceu' 
               component={ EsqueceuSenha }
               options={{ title:'Recupere sua senha:' }}
            >
            </Stack.Screen>
            <Stack.Screen 
               name='Fim' 
               component={ TelaFinal }
               options={{ title:'Sucesso!' }}>
            </Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   );
}