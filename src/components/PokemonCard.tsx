import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { styles } from '../theme/themeApp';

import ImageColors from 'react-native-image-colors';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon
}

const PokemonCard = ({ pokemon }: Props) => {

  const [ bgColor, setBgColor ] = useState('grey');

  useEffect(() => {
    ImageColors.getColors( pokemon.picture, { fallback: 'grey' })
    .then( colors => {
      
      if ( colors.platform === 'android' ){
        setBgColor( colors.dominant || 'grey');
      } else if ( colors.platform === 'ios' ) {
        setBgColor( colors.background || 'grey' )
      }
    })
  }, [])

  return (
      <TouchableOpacity
        activeOpacity={ 0.8 }
      >

        <View style={{ 
          ...styles.cardContainer,
          width: windowWidth * 0.42,
          backgroundColor: bgColor
        }}>

          <View>
            <Text style={ styles.cardNamePokemon } >
              { pokemon.name }
              { '\n#' + pokemon.id }
            </Text>
          </View>

          <View style={ styles.pokebolaContainer }>
            <Image 
              source={ require('../assets/pokebola-blanca.png') }
              style= { styles.pokebola }
            />
          </View>
          
          
          <FadeInImage
            uri={ pokemon.picture }
            style={ styles.pokeImg }
          />

        </View>

      </TouchableOpacity> 
  )
}

export default PokemonCard
