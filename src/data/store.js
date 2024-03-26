import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  characters: [],
  errorString: '',
  apiParam: {
    name: '',
  }
});