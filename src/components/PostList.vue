<template>
  <div v-if="posts.length > 0"  class="list"
      >
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @click="updatePost(post)"
      />

  </div>
  <h2 v-else style="">
    Список постов пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods:{
    updatePost(post){
      this.$emit('updateP',post)
    }
  }
}
</script>

<style scoped>
.list{
  width: 420px;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}
</style>