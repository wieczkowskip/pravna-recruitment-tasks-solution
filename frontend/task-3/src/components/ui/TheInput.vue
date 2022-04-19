<template>
  <input :type="type" :class="className" :placeholder="placeholder" />
</template>

<script>
export default {
  props: ["type", "className", "placeholder"],
};
</script>

<style scoped lang="scss">
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
@media screen and (max-width: 1000px) {
  .form__search {
    width: 100%;
    height: 59px;
  }
}
</style>