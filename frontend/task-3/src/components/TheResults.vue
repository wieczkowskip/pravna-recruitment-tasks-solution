<template>
  <div class="results">
    <p>
      Wyniki wyszukiwania ({{
        this.$store.getters.getFilteredCharacters.length
      }})
    </p>
    <CharacterItem
      v-for="person in this.$store.getters.getFilteredCharacters"
      :key="person.name"
      :fullName="person.name"
      :houseName="person.houseName"
      :birthdayDate="person.birthdayDate"
      :imageURL="person.imageURL"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.results {
  width: 1332px;
  color: #a4b0be;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  p {
    margin-bottom: 16px;
    flex-basis: 100%;
  }
}
@media screen and (max-width: 1400px) {
  .results {
    width: 1000px;
  }
}
@media screen and (max-width: 1000px) {
  .results {
    width: 668px;
  }
}
@media screen and (max-width: 724px) {
  .results {
    width: 350px;
    justify-content: center;
  }
}
@media screen and (max-width: 460px) {
  .results {
    width: 300px;
  }
}
</style>