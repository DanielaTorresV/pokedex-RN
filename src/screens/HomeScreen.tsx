import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../theme/themeApp';
import usePokemonPaginated from '../hooks/usePokemonPaginated';

import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
 
  const { top } = useSafeAreaInsets();
  const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image 
       source={ require('../assets/pokebola.png') }
       style={ styles.pokebolabg }
      />        

      <View
        style={{ alignItems: 'center' }}
      >
        <FlatList 
          data={ simplePokemonList }
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          numColumns={ 2 }

          ListHeaderComponent={(
            <Text style={{ 
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10
              }} 
            > Pokedex 
            </Text>
          )}

          renderItem= { ({ item, index }) => ( <PokemonCard pokemon={ item }/> )}
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
      </View>
        
    </>
  )
}

export default HomeScreen;
