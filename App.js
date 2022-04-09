import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';
import { View } from 'react-native';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';

import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  console.tron.log("alura");
  if (!fonteCarregada) {
    return <View />
  }
  return <TelaPadrao><Rotas /></TelaPadrao>;
}