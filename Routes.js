import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './Telas/TelaInicial';
import Formulario from './Telas/Formulario';
import TelaFinal from './Telas/TelaFinal';

const Stack = createStackNavigator();

export default function Routes() {
   return(
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen 
               name='Inicio' 
               component={ TelaInicial } 
               options={{ title:'Seja Bem-Vindo' }}
            >   
            </Stack.Screen>
            <Stack.Screen 
               name='Formulario' 
               component={ Formulario }>
            </Stack.Screen>
            <Stack.Screen 
               name='Fim' 
               component={ TelaFinal }
               options={{ title:'Resumo' }}>
            </Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   );
}