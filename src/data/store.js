import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  pagesNum: 42,
  allSpecies: [],
  allStatus: [],
  characters: [],
  errorString: '',
  apiParam: {
    name: '',
    species: '',
  }
});