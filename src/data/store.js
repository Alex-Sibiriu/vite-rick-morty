import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  pagesNum: 0,
  allSpecies: [],
  allStatus: [],
  characters: [],
  errorString: '',
  apiParam: {
    name: '',
    species: '',
    status: '',
    page: 1,
  }
});