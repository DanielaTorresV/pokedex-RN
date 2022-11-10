import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from '../theme/themeApp';

const Loading = () => {
  return (
    <View style={{
      ...styles.containerIndicator
    }}>
      <ActivityIndicator
        color='#808B96'
        size={ 50 }
      />
      <Text>Cargando...</Text>
    </View>
  )
}

export default Loading;
