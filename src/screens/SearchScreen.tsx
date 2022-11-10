import React from 'react';
import { View, Platform, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { styles, colors } from '../theme/themeApp';
import PokemonCard from '../components/PokemonCard';

const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  if ( isFetching ){
    return(
      <View style={{
        ...stylesSearch.containerIndicator
      }}>
        <ActivityIndicator
          color='#808B96'
          size={ 50 }
        />
        <Text>Cargando...</Text>
      </View>
    )
  }

  return (
    <View style={{ 
      ...stylesSearch.container,
      marginTop: Platform.OS === 'ios' ? top : top + 15
      }}
    >
      <SearchInput />

      <FlatList 
          data={ simplePokemonList }
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          numColumns={ 2 }

          ListHeaderComponent={(
            <Text style={{ 
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10
              }} 
            > Pokedex 
            </Text>
          )}

          renderItem= { ({ item, index }) => ( <PokemonCard pokemon={ item }/> )}
          
        />

    </View>
  )
}

export default SearchScreen;


const stylesSearch = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});