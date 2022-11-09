import { StyleSheet } from "react-native";

export const colors =  {
  primary: '#2C3E50',
  secondary: '#808B96',
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary
  },
  pokebolabg: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    opacity: 0.2
  },
  activityIndicator: {
    height: 100
  },
  pokeImg:{
    width: 100,
    height: 100
  }
});
