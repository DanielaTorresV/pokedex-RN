import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import { PokemonFull, Type } from '../interfaces/PokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonFull
}

const PokemonDetail = ({ pokemon }: Props) => {


  return (
    <ScrollView
      showsVerticalScrollIndicator={ false }
      style={{
        ...StyleSheet.absoluteFillObject,
        marginBottom: 15
      }}
    >
      {/* Types y peso */}
      <View style={{
        ...styles.container,
        marginTop: 370
      }}>
        <Text style={{
          ...styles.title
        }}>Types</Text>

        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map( ({ type }) => (
              <Text
                key={ type.name }
                style={{ ...styles.text, marginRight: 10 }}
              >
                { type.name }
              </Text>
              ))
          }
        </View>

        <Text style={ styles.title }>Peso</Text>
        <Text style={ styles.text }>{ pokemon.weight } kg</Text>
          
      </View>

      {/* Sprites */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Sprites</Text>
      </View>

      <ScrollView
        //style={}
        horizontal={ true }
        showsHorizontalScrollIndicator= { false }
      >
        <FadeInImage
          uri={ pokemon.sprites.front_default }
          style={ styles.basicSprite }
        />
        <FadeInImage
          uri={ pokemon.sprites.back_default }
          style={ styles.basicSprite }
        />
        <FadeInImage
          uri={ pokemon.sprites.front_shiny }
          style={ styles.basicSprite }
        />
        <FadeInImage
          uri={ pokemon.sprites.back_shiny }
          style={ styles.basicSprite }
        />

      </ScrollView>

      {/* Habilidades */}

      <View style={ styles.container }>
        <Text style={ styles.title }>Base Abilities</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.abilities.map( ({ ability }) => (
              <Text
                key={ ability.name }
                style={{ ...styles.text, marginRight: 10 }}
              >
                { ability.name }
              </Text>
              ))
          }
        </View>
      </View>

      {/* Movimientos */}

      <View style={ styles.container }>
        <Text style={ styles.title }>Moves</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            pokemon.moves.map( ({ move }) => (
              <Text
                key={ move.name }
                style={{ ...styles.text, marginRight: 10 }}
              >
                { move.name }
              </Text>
              ))
          }
        </View>
      </View>

    </ScrollView>
  )
}

export default PokemonDetail;


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {
    marginTop: 20,
    fontSize: 22, 
    fontWeight: 'bold'
  },
  text: {
    fontSize: 19
  },
  basicSprite: {
    marginTop: 10,
    width: 120,
    height: 50
  }
});