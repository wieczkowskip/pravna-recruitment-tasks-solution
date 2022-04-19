<template>
  <div class="filters">
    <form @submit.prevent="" class="filters__form">
      <TheInput
        type="text"
        className="form__search"
        placeholder="Wyszukaj po imieniu i nazwisku"
        v-model="nameFilter"
      />
      <TheSelect name="character" v-model="characterFilter">
        <option value="">Wszystkie postaci</option>
        <option value="onlyStudents">Tylko uczniowie</option>
        <option value="onlyTeachingStaff">Tylko kadra nauczycielska</option>
      </TheSelect>
      <TheSelect name="house" v-model="houseFilter">
        <option value="">Wszystkie domy</option>
        <option value="gryffindor">Gryffindor</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="slytherin">Slytherin</option>
      </TheSelect>
      <TheButton type="submit">
        <img src="../assets/icon-search.svg" alt="search icon" />
      </TheButton>
      <TheButton type="clear">
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
    },
  },
  computed: {
    getLocalStorage(name) {
      if (localStorage.getItem(name) != null){
        return JSON.parse(localStorage.getItem(name))
      }
      return '';
    },
  },
  methods:{
    getLocalData(){
      this.nameFilter = this.getLocalStorage('nameFilter');
      this.characterFilter = this.getLocalStorage('characterFilter');
      this.houseFilter = this.getLocalStorage('houseFilter');
    }
  },
  mounted() {
    this.$store.dispatch("loadData");
    //this.getLocalData();
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