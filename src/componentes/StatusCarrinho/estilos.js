import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default StyleSheet.create({
  conteudo: {
    backgroundColor: cores.roxo,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
    fontFamily: "MontserratRegular",
  },
  total: {
    alignItems: 'center',
  },
  descricao: {
    fontSize: 16,
    color: cores.claro,
    fontFamily: "MontserratBold",
  },
  valor: {
    fontSize: 18,
    marginVertical: 6,
    color: cores.laranja,
    fontFamily: "MontserratBold",
  },
  botao: {
    flexGrow: 1,
    alignItems: 'flex-end',
    fontFamily: "MontserratRegular",
  },
});
