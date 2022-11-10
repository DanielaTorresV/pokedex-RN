import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View style={ styles.container } >
      <View style={ styles.textBackground } >
        <TextInput 
          placeholder='Buscar Pokémon'
          style={{ 
            ...styles.textInput,
            top: (Platform.OS === 'ios') ? 0 : 2
          }}
          autoCapitalize='none'
          autoCorrect={ false }
        />
        <Icon
          name='search-outline'
          color='grey'
          size={ 30 }
        />
      </View>
    </View>
  )
}

export default SearchInput;

const styles = StyleSheet.create({
  container:{
    //backgroundColor: 'red'
  },
  textBackground:{
    flexDirection: 'row',
    backgroundColor: '#F3F1F3',
    borderRadius: 50, 
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textInput:{
    flex: 1,
    fontSize: 18
  }
});