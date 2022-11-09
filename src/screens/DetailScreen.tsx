import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/themeApp';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

const DetailScreen = ( { route, navigation }: Props ) => {

const { simplePokemon, color } = route.params;
const { id, name, picture } = simplePokemon;
const { top } = useSafeAreaInsets();

  return (
    <View>
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
    </View>
    
  )
}

export default DetailScreen;
