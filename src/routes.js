import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Feed from './pages/Feed';
import New from './pages/New';

const AppStack = createStackNavigator();

export default function Routes(){
  return(
      <NavigationContainer>

        <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="Feed" component={Feed} />
            <AppStack.Screen name="New" component={New} />
                      
        </AppStack.Navigator>
      </NavigationContainer>
  )

}

/*
createStackNavigator é para navegação em pilha, enquanto uma tela está ativa existe várias ativas ao mesmo tempo.
createSwitchNavigator só uma tela ficará tiva por vez, o usuário não poderá voltar para tela anterior.
*/