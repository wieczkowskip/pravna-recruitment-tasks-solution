import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      characters: [],
      filteredCharacters: [],
    };
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
    getFilteredCharacters(state) {
      return state.filteredCharacters;
    },
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setFilteredCharacters(state, characters) {
      state.filteredCharacters = characters;
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
            if (
              results.filter((item) => item.name === data[id].name).length === 0
            ) {
              results.push({
                id: id,
                name: data[id].name,
                firstName: data[id].name.split(" ")[0],
                houseName: data[id].house,
                birthdayDate: data[id].dateOfBirth,
                student: data[id].hogwartsStudent,
                teachingStaff: data[id].hogwartsStaff,
                imageURL: data[id].image,
              });
            }
          }
          results.sort((a, b) => a.firstName.localeCompare(b.firstName));
          console.log(results);
          store.commit("setCharacters", results);
          store.commit("setFilteredCharacters", results);
        });
    },
  },
  modules: {},
});
export default store;
