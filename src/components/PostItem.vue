<template>
  <div class="post" >
    <div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.post {
  width: 400px;
  padding: 15px;
  border: 1px solid teal;
  border-radius: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  overflow: hidden;
  white-space: nowrap;
}
.post:hover{
  border: 2px solid teal;
cursor:pointer;
  background: #e4e4e4;
  transition: .1s;
}
.post__btns {
  display: flex;
}
</style>