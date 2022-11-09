import React from 'react';
import { Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/themeApp';
import usePokemonPaginated from '../hooks/usePokemonPaginated';

const HomeScreen = () => {
 
  const { top } = useSafeAreaInsets();
  const { isLoading, simplePokemonList } = usePokemonPaginated();

  return (
    <>
      <Image 
       source={ require('../assets/pokebola.png') }
       style={ styles.pokebolabg }
      />
      
      <Text style={{ 
        ...styles.title,
        ...styles.globalMargin,
        top: top + 20
        }} >Pokedex </Text>
    </>
  )
}

export default HomeScreen;
