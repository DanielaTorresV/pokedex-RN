import React from 'react';
import { ActivityIndicator, FlatList, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../theme/themeApp';
import usePokemonPaginated from '../hooks/usePokemonPaginated';

const HomeScreen = () => {
 
  const { top } = useSafeAreaInsets();
  const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

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

        <FlatList 
          data={ simplePokemonList }
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          renderItem= { ({ item, index }) => (
            <Image
              source={{ uri: item.picture }}
              style={ styles.pokeImg }
            />
          )}
          onEndReached={ loadPokemons }
          onEndReachedThreshold={ 0.4 }

          ListFooterComponent={(
            <ActivityIndicator 
              style={ styles.activityIndicator }
              color={ colors.primary }
              size={ 30 }
            />
          )}
        />
    </>
  )
}

export default HomeScreen;
