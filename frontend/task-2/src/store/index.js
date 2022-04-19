import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      DUMMY_DATA: [
        {
          firstName: "Harry",
          lastName: "Potter",
          houseName: "Gryffindor",
          birthdayDate: "31-07-1980",
          imageURL: "http://hp-api.herokuapp.com/images/harry.jpg",
        },
        {
          firstName: "Hermione",
          lastName: "Granger",
          houseName: "Gryffindor",
          birthdayDate: "19-09-1979",
          imageURL: "http://hp-api.herokuapp.com/images/hermione.jpeg",
        },
        {
          firstName: "Ron",
          lastName: "Weasley",
          houseName: "Gryffindor",
          birthdayDate: "01-03-1980",
          imageURL: "http://hp-api.herokuapp.com/images/ron.jpg",
        },
        {
          firstName: "Draco",
          lastName: "Malfoy",
          houseName: "Slytherin",
          birthdayDate: "05-06-1980",
          imageURL: "http://hp-api.herokuapp.com/images/draco.jpg",
        }
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
