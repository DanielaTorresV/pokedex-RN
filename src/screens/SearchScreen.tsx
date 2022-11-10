import React from 'react';
import { View, Platform, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { styles } from '../theme/themeApp';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  if ( isFetching ){
    return(
      <Loading />
    )
  }

  return (
    <View style={{ 
      ...stylesSearch.container
      }}
    >
      <SearchInput style={{
        position: 'absolute',
        zIndex: 999,
        width: screenWidth - 20,
        top: (Platform.OS === 'ios') ? top : top + 20
      }} />

      <FlatList 
          data={ simplePokemonList }
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
  }
});