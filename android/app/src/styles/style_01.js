/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

const alto = Dimensions.get('window').height - 150;

// crea paleta de colores
const principal = '#1B2E66';
const naranja = '#FF9900';
const blanco = '#FFFFFF';
const gris_1 = '#B2BDD5';
const gris_2 = '#e9e9e9';
const lila = '#f7f0f9';


// crea la hoja de estilos
export const style_01 = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  divHeader: {
    backgroundColor: gris_2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center', // Centra verticalmente
    height: 150,
    
  },
  divMain: {
    backgroundColor: gris_1,
    height: alto,
    padding: 8,
  },
  divFooter: {
    paddingTop: 5,
    backgroundColor: principal,
    alignItems: 'center',
    height: 50,
  },
  textFooter: {
    color: naranja,
    fontSize: 11,
    fontWeight: '300',
  },
  h1: {
    color: principal,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    color: principal,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    color: principal,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  p1: {
    color: principal,
    textAlign: 'justify',
    lineHeight: 14,
    fontSize: 12,
  },
  tarjeta: {
    backgroundColor: lila,
    borderRadius: 10,
    margin: 5,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400, // Ancho de la tarjeta ajustado
    height: 100, // Alto de la tarjeta ajustado
  },
  name:{
    top:50,
    fontWeight: 'bold',
  },

  
});
