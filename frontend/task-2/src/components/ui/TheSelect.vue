<template>
  <select :name="name" :class="className">
    <slot></slot>
  </select>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    className() {
      return `form__${this.name}`;
    },
  },
};
</script>

<style scoped lang="scss">
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
@media screen and (max-width: 1000px) {
  .form__character,
  .form__house {
    width: 100%;
    height: 59px;
  }
}
</style>