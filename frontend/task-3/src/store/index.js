import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      characters: [],
    };
  },
  getters: {
    getCharacters(state){
      return state.characters;
    }
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    loadData() {
      fetch("http://hp-api.herokuapp.com/api/characters")
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
        })
        .then(function (data) {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              houseName: data[id].house,
              birthdayDate: data[id].dateOfBirth,
              imageURL: data[id].image,
            });
          }
          store.commit("setCharacters", results);
        });
    },
  },
  modules: {},
});
export default store;
