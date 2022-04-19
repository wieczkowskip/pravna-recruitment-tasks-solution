<template>
  <div class="main">
    <TheHeader
      title="HP Character Browser"
      description="Meet the characters of the HP novel"
    />
    <TheFilters />
    <TheResults />
  </div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import TheFilters from "../components/TheFilters.vue";
import TheResults from "../components/TheResults.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFilters,
    TheResults
  },
};
</script>
<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
}
</style>
