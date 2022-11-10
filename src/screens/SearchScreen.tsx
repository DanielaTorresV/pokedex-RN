import React, { useState, useEffect } from 'react';
import { View, Platform, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { styles } from '../theme/themeApp';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

  const [ term, setTerm ] = useState('');
  const [ pokemonFiltered, setPokemonFiltered ] = useState<SimplePokemon[]>([]);
  
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  useEffect(() => {

    if(term.length === 0) {
      return setPokemonFiltered([])
    }

    setPokemonFiltered(
      simplePokemonList.filter( 
        (poke) => poke.name.toLowerCase()
        .includes( term.toLowerCase() ) )
    )

  }, [ term ])

  if ( isFetching ){
    return(<Loading />)
  }

  return (
    <View style={{ 
      ...stylesSearch.container
      }}
    >
      <SearchInput 
        onDebounce={ ( value ) => setTerm( value ) }
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 20,
          top: (Platform.OS === 'ios') ? top : top + 20
        }} 
      />

      <FlatList 
          data={ pokemonFiltered }
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          numColumns={ 2 }

          ListHeaderComponent={(
            <Text style={{ 
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              marginTop: top + 70
              }} 
            > { term } 
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
  }
});