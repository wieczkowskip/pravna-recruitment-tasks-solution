<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "icon", "iconAlt"],
  computed: {
    className() {
      return `form__button form__button--${this.type}`;
    },
  },
};
</script>

<style scoped lang="scss">
.form__button {
  width: 101px;
  height: 49px;

  border-radius: 8px;
  border-style: none;
  &:hover,
  &:active {
    cursor: pointer;
  }
}
.form__button--submit {
  background: #946b2d;
  margin-right: 4px;
  img {
    width: 24px;
    height: 24px;
  }
  &:hover,
  &:active {
    background: #7a5824;
  }
}
.form__button--clear {
  background: #ced6e0;
  img {
    width: 22px;
    height: 22px;
  }
  &:hover,
  &:active {
    background: #a5acb4;
  }
}
@media screen and (max-width: 1000px) {
  .form__button {
    width: 100%;
    height: 59px;
  }
}
</style>