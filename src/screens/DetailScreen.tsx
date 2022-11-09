import React from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/themeApp';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

const DetailScreen = ( { route, navigation }: Props ) => {

const { simplePokemon, color } = route.params;
const { id, name, picture } = simplePokemon;
const { top } = useSafeAreaInsets();

const { isLoading, pokemon } = usePokemon(id);

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{
        ...styles.headerContainerDetail,
        backgroundColor: color
      }} >

        <TouchableOpacity
          onPress={ () => navigation.pop() }
          activeOpacity={ 0.8 }
          style={{
            ...styles.backButtonHeader,
            top: top + 20
          }}
        >
          <Icon name='arrow-back-outline' color={ 'white' } size={ 35 }/>
        </TouchableOpacity>

        <Text style={{
          ...styles.pokemonNameDetail,
          top: top + 45
        }}>
          { name + '\n'}#{ id }
        </Text>

          <Image 
            source={ require('../assets/pokebola-blanca.png') }
            style= { styles.pokebolaHeaderDetail }
          />

          <FadeInImage
            uri={ picture }
            style={ styles.pokeImgHeaderDetail }
          />

      </View>

      {/* Detalles y Loading */}
      <View style={{
        ...styles.activityIndicatorDetail
      }}>
        <ActivityIndicator 
          color={ color }
          size={ 50 }
        />
      </View>
    </View>
    
  )
}

export default DetailScreen;
