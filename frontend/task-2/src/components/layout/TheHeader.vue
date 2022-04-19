<template>
  <header>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </header>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>

<style scoped lang="scss">
header {
  color: #57606f;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  p {
    font-size: 24px;
    font-weight: 400;
    width: 397px;
    height: 27px;
    margin-bottom: 32px;
  }
  h1 {
    font-size: 64px;
    font-weight: 700;
    margin: 0;
    width: 687px;
    height: 72px;
  }
}
@media screen and (max-width: 724px) {
  header {
    h1 {
      font-size: 42px;
      width: auto;
    }
    p {
      font-size: 16px;
      width: auto;
    }
  }
}
@media screen and (max-width: 460px) {
  header {
    h1 {
      font-size: 36px;
      width: auto;
      height: auto;
      text-align: center;
    }
    p {
      font-size: 16px;
      width: auto;
    }
  }
}
</style>