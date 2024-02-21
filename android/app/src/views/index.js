import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style_01 } from '../styles/style_01';

const Index = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  const handlePokemonPress = (pokemonName) => {
    navigation.navigate('PokemonDetails', { pokemonName });
  };

  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../imgs/logoPM.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>First Generation</Text>

        <ScrollView style={{ marginTop: 8 }}>
          {pokemons.map(item => (
            <TouchableOpacity
              style={style_01.tarjeta}
              key={item.name}
              onPress={() => handlePokemonPress(item.name)}
            >
              <Text style={style_01.name}>{item.name}</Text>
              <Image
                source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png` }}
                style={{
                  width: 125,
                  height: 100,
                  alignSelf: 'flex-start',
                  marginTop: 1,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
