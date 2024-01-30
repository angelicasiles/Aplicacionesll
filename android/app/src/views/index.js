/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {style_01} from '../styles/style_01';

const data = [
  {
    Signo: 'Acuario',
    Dias: 'Ene/20 - Feb/18',
    Elemento: 'Aire',
    Astro: 'Urano',
    Piedra: 'Turquoise',
    Imagen: '09_Libra.jpg',
  },
  {
    Signo: 'Piscis',
    Dias: 'Feb/19 - Mar/20',
    Elemento: 'Agua',
    Astro: 'Neptuno',
    Piedra: 'Ametyst',
  },
  {
    Signo: 'Aries ',
    Dias: 'Mar/21 - Abr/19',
    Elemento: 'Fuego',
    Astro: 'Marte',
    Piedra: 'Heliotrope',
  },
  {
    Signo: 'Tauro',
    Dias: 'Abr/20 - May/20',
    Elemento: 'Tierra',
    Astro: 'Venus',
    Piedra: 'Quarz',
  },
  {
    Signo: 'Geminis',
    Dias: 'May/21 - Jun/20',
    Elemento: 'Aire',
    Astro: 'Mercurio',
    Piedra: 'Agate',
  },
  {
    Signo: 'Cancer',
    Dias: 'Jun/21 - Jul/22',
    Elemento: 'Agua',
    Astro: 'Luna',
    Piedra: 'Aventurine',
  },
  {
    Signo: 'Leo',
    Dias: 'Jul/23 - Ago/22',
    Elemento: 'Fuego',
    Astro: 'Sol',
    Piedra: 'Honey Agate',
  },
  {
    Signo: 'Virgo',
    Dias: 'Ago/23 - Sep/22',
    Elemento: 'Tierra',
    Astro: 'Mercurio',
    Piedra: 'Carnelian',
  },
  {
    Signo: 'Libra',
    Dias: 'Sep/23 - Oct/22',
    Elemento: 'Aire',
    Astro: 'Venus',
    Piedra: 'Japer',
  },
  {
    Signo: 'Escorpio',
    Dias: 'Oct/23 - Nov/21',
    Elemento: 'Agua',
    Astro: 'Urano',
    Piedra: 'Chrysoprase',
  },
  {
    Signo: 'Sagitario',
    Dias: 'Nov/22 - Dic/21',
    Elemento: 'Fuego',
    Astro: 'Jupiter',
    Piedra: 'Blue Agate',
  },
  {
    Signo: 'Capricornio',
    Dias: 'Dic/22 - Ene/19',
    Elemento: 'Tierra',
    Astro: 'Saturno',
    Piedra: 'Blue Quartz',
  },
];

const Index = () => {
  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../imgs/logos/logo_universidad.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>SIGNOS ZODIACALES</Text>
        <Text style={style_01.p1}>
        En la astrología occidental, los signos zodiacales o signos astrológicos,
        son los doce sectores de treinta grados de la eclíptica desde el equinoccio
        vernal, una de las intersecciones con la elíptica con el ecuador celeste,
        también conocido como Punto Aries.
        </Text>

        <ScrollView style={{marginTop: 8}}>
          {data.map(item => (
            <View style={style_01.tarjeta} key={item.codigo}>
              <Text>Signo: {item.Signo}</Text>
              <Text>Dias: {item.Dias}</Text>
              <Text>Elemento: {item.Elemento}</Text>
              <Text>Astro: {item.Astro}</Text>
              <Text>Piedra: {item.Piedra}</Text>
            </View>
            
          ))}
        </ScrollView>
      </View>

      <View style={style_01.divFooter}>
        <Text style={style_01.textFooter}>
          Carrera de Tecnologías de Información
        </Text>
        <Text style={style_01.textFooter}>Sede del Pacífico</Text>
      </View>
    </View>
  );
};

export default Index;
