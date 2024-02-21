import React, { useState, useEffect } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PokemonDetails = ({ route }) => {
    const { pokemonName } = route.params;
    const [pokemonData, setPokemonData] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => setPokemonData(data));
    }, [pokemonName]);

    return (
        <View style={{ flex: 1, backgroundColor: '#e7e7e5' }}>
            <View style={{ backgroundColor: '#e7e7e5', height: 175, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../imgs/logoPM.png')} style={{ flex: 1, resizeMode: 'contain' }} />
            </View>


            <View style={{}}>
                <Text style={{ fontSize: 24, color: '#717171', textAlign: 'center' }}>Pokémon Information</Text>
            </View>



            <ScrollView style={{ flex: 1, padding: 16 }}>
                {pokemonData && (
                    <>
                        {/* Rectángulo para la información del Pokémon */}
                        <View style={{ backgroundColor: '#fac915', padding: 16, borderRadius: 8, borderWidth: 3, borderColor: 'blue', marginBottom: 16 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: pokemonData.sprites.front_default }}
                                    style={{ width: 125, height: 100, alignSelf: 'flex-start', marginTop: 1 }}
                                />
                                <View style={{ marginLeft: 16 }}>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000000', marginLeft: 25}}>{pokemonData.name}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>Fearures:</Text>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#000000', marginLeft: 15}}>-Code: {pokemonData.id}</Text>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#000000',marginLeft: 15}}>-Height: {pokemonData.height}</Text>
                                    <Text style={{ fontSize: 16, marginTop: 8, color: '#000000', marginLeft: 15}}>-Weight: {pokemonData.weight}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Rectángulo para los tipos */}
                        <View style={{ backgroundColor: '#fac915', padding: 10, borderRadius: 8, borderWidth: 3, borderColor: 'blue', marginBottom: 16 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', textAlign: 'center' }}>Types to belong:</Text>
                        </View>


                        {pokemonData.types.map((type, index) => (
                            <Text key={index} style={{ fontSize: 16, marginBottom: 10, marginLeft: 20, color: '#000000' }}>
                                {type.type.name}
                            </Text>
                        ))}


                        {/* Rectángulo para los movimientos */}
                        <View style={{ backgroundColor: '#fac915', padding: 10, borderRadius: 8, borderWidth: 3, borderColor: 'blue', marginBottom: 16 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', textAlign: 'center' }}>Movimientos:</Text>
                        </View>

                        {pokemonData.moves.map((move, index) => (
                            <Text key={index} style={{ fontSize: 16, marginTop: 10, marginLeft: 20, color: '#000000' }}>
                                {move.move.name}
                            </Text>
                        ))}
                    </>
                )}
            </ScrollView>
        </View>
    );
};

export default PokemonDetails;





