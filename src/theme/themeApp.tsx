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
  cardContainer: {
    marginHorizontal: 10, 
    marginBottom: 25,
    //backgroundColor: 'gray',
    borderRadius: 10,
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  cardNamePokemon: {
    top: 10,
    left: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  pokebolaContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    width: 100,
    height: 100,
    opacity: 0.5
  },
  pokebola: {
    position: 'absolute',
    bottom: -25,
    right: -25,
    width: 100,
    height: 100
  },
  pokeImg:{
    position: 'absolute',
    bottom: -5,
    right: -8,
    width: 110,
    height: 110
  },
  headerContainerDetail: {
    height: 380,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButtonHeader: {
    position: 'absolute',
    left: 20,
  },
  pokemonNameDetail: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'flex-start',
    left: 20
  },
  pokebolaHeaderDetail: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7
  },
  pokeImgHeaderDetail: {
    position: 'absolute',
    bottom: -15,
    width: 250,
    height: 250,
  },
  activityIndicatorDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
