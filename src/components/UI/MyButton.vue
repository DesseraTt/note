<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  width: 160px;
  height: 42px;
  margin: 5px;
  padding: 13px 15px;
  background: #fff;
  color: teal;
  border: 1px solid teal;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover{
  border: 2px solid teal;
  color:teal;
  background: #e4e4e4;
  transition: .1s;
 }
</style>