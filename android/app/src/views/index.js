/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { style_01 } from '../styles/style_01';

const Index = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../imgs/logoPM.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>First Generation</Text>

        <ScrollView style={{ marginTop: 8 }}>
          {pokemons.map(item => (
            <View style={style_01.tarjeta} key={item.name}>
              <Text style = {{}}>{item.name}</Text>
              <Image
                source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`}}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 150,
                  height: 100,
                  alignSelf: 'left',
                  marginTop: 1,
                }}
              />
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