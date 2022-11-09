import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/themeApp';

const DetailScreen = () => {
  return (
    <View style={ styles.globalMargin } >
      <Text style={ styles.title } >Detail Screen</Text>
    </View>
  )
}

export default DetailScreen;
