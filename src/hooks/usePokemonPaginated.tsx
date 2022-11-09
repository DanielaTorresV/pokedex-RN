import React, { useEffect, useRef } from 'react';
import { pokemonApi } from '../api/pokemonApi';

const usePokemonPaginated = () => {

  const nextPageUrl = useRef( 'https://pokeapi.co/api/v2/pokemon?limit=40' );

  const loadPokemons = async() => {

    const res =  await pokemonApi.get( nextPageUrl.current );
    console.log( res.data );
  }
  
  useEffect(() => {
    loadPokemons();
  }, [])

  return {

  }

}

export default usePokemonPaginated;
