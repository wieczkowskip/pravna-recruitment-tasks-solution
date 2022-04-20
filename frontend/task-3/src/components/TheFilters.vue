<template>
  <div class="filters">
    <form @submit.prevent="updateFilter" class="filters__form">
      <input
        type="text"
        class="form__search"
        placeholder="Wyszukaj po imieniu i nazwisku"
        v-model="nameFilter"
      />
      <select
        name="character"
        class="form__character"
        v-model="characterFilter"
      >
        <option value="">Wszystkie postaci</option>
        <option value="hogwartsStudent">Tylko uczniowie</option>
        <option value="hogwartsStaff">Tylko kadra nauczycielska</option>
      </select>
      <select name="house" class="form__house" v-model="houseFilter">
        <option value="">Wszystkie domy</option>
        <option value="gryffindor">Gryffindor</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="slytherin">Sltttytherin</option>
      </select>
      <TheButton className="submit" type="submit">
        <img src="../assets/icon-search.svg" alt="search icon" />
      </TheButton>
      <TheButton className="clear" type="button" @click="clearFilters">
        <img src="../assets/icon-clear.svg" alt="clear icon" />
      </TheButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameFilter: "",
      characterFilter: "",
      houseFilter: "",
    };
  },
  watch: {
    nameFilter(newValue) {
      localStorage.setItem("nameFilter", newValue);

      this.updateFilter();
    },
    characterFilter(newValue) {
      localStorage.setItem("characterFilter", newValue);

      this.updateFilter();
    },
    houseFilter(newValue) {
      localStorage.setItem("houseFilter", newValue);

      this.updateFilter();
    },
  },
  methods: {
    updateFilter() {
      let result = this.$store.getters.getCharacters;

      if (this.nameFilter.length >= 3) {
        result = result.filter((item) =>
          item.name.toLowerCase().includes(this.nameFilter.toLowerCase())
        );
      }

      if (this.characterFilter === "hogwartsStudent") {
        result = result.filter((item) => item.student);
      } else if (this.characterFilter === "hogwartsStaff") {
        result = result.filter((item) => item.teachingStaff);
      }

      if (this.houseFilter !== "") {
        result = result.filter(
          (item) => item.houseName.toLowerCase() === this.houseFilter
        );
      }
      console.log(result);
      result.sort((a, b) => a.name - b.name);
      console.log(result);
      this.$store.commit("setFilteredCharacters", result);
    },
    clearFilters() {
      this.nameFilter = "";
      this.characterFilter = "";
      this.houseFilter = "";
    },
    getLocalData() {
      this.nameFilter = localStorage.getItem("nameFilter");
      this.characterFilter = localStorage.getItem("characterFilter");
      this.houseFilter = localStorage.getItem("houseFilter");
    },
  },
  mounted() {
    this.$store.dispatch("loadData");
    this.getLocalData();
    setTimeout(() => this.updateFilter(), 500);
  },
};
</script>

<style scoped lang="scss">
.filters__form {
  display: flex;
  justify-content: center;
  width: 1320px;
  height: 49px;
  margin-bottom: 48px;
}
input {
  background: #fff;
  border: 0;
  border-radius: 8px;
  padding: 16px 24px;
  border-right: 24px solid transparent;
  outline: 1px solid #ced6e0;
  color: #747d8c;
  margin-right: 16px;
  font-size: 15px;
}
input {
  &:hover,
  &:active {
    cursor: text;
  }
}
.form__search {
  width: 428px;
  height: 49px;
}
select {
  background: #fff;
  border: 0;
  border-radius: 8px;
  padding: 16px 24px;
  border-right: 24px solid transparent;
  outline: 1px solid #ced6e0;
  color: #747d8c;
  margin-right: 16px;
  font-size: 15px;
  &:hover,
  &:active {
    cursor: pointer;
  }
}
.form__character,
.form__house {
  width: 317px;
  height: 49px;
}

@media screen and (max-width: 1400px) {
  .filters__form {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 1000px;
  }
}
@media screen and (max-width: 1000px) {
  .filters__form {
    display: flex;
    justify-content: space-between;
    width: 668px;
    flex-direction: column;
    height: 355px;
  }
  .form__search {
    width: 100%;
    height: 59px;
  }
  .form__character,
  .form__house {
    width: 100%;
    height: 59px;
  }
}
@media screen and (max-width: 724px) {
  .filters__form {
    display: flex;
    justify-content: space-between;
    width: 350px;
  }
}
@media screen and (max-width: 460px) {
  .filters__form {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
}
</style>