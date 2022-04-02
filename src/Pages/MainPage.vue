<template>
<div class="navbar">
  <my-button>Назад к проектам</my-button>
  <my-button>Выйти</my-button>
</div>
  <div class="page">
    <div class="main">
      <my-button
      @click="addNote">+ Add Note!</my-button>
      <post-list
          @updateP="update"
          v-bind:posts="posts"
      />
    </div>

    <div class="noteCreator">
      <div class="toolbar">
        <div class="left_toolbar">
          abc
          abc
        </div>
        <div class="side_toolbar">
         <my-button @click="deletePost">Delete this</my-button>
        </div>

      </div>
      <div class="note_area">
        <my-input
        style="
        {fontSize: 25 + 'px';
        border: none;
        outline:none;
        overflow: hidden;
        width: 600px}"
        :placeholder="placeholder1"
        v-bind:value="curPost.title"
        @input="this.curPost.title=$event.target.value"></my-input>

        <textarea class="textArea" rows="32" cols="102"
                v-bind:value="curPost.text"
                  @input="this.curPost.text=$event.target.value"
        ></textarea>
      </div>

    </div>
  </div>

</template>

<script>

import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    PostList, MyButton, MyInput
  },
  data() {
    return {
      curPost: {
        id: 1,
        title: '',
        text: '',
      },
      placeholder1: 'Название',
      posts: [
        {
          id: 1,
          title: 'post1',
          text: 'descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1descr1'
        },
        {id: 2, title: 'post2', text: 'descr2'},
        {id: 3, title: 'post3', text: 'descr3'},
        {id: 4, title: 'post4', text: 'descr4'},
        {id: 5, title: 'post1', text: 'descr1'},
        {id: 6, title: 'post2', text: 'descr2'},
        {id: 7, title: 'post3', text: 'descr3'},
        {id: 8, title: 'post4', text: 'descr4'},
        {id: 9, title: 'post1', text: 'descr1'},
        {id: 10, title: 'post2', text: 'descr2'},
        {id: 11, title: 'post3', text: 'descr3'},
        {id: 12, title: 'post12', text: 'descr12'},
      ].reverse()
    }
  },
  methods: {
    addNote() {

      let newPost = {id: Date.now(), title: '', text: ''}
      this.posts.unshift(newPost);
      this.curPost = newPost;
    },
    update(post) {
      this.curPost = post;
    },
    deletePost() {
      if(this.posts.length!==0){
        this.posts = this.posts.filter(post=>post.id !== this.curPost.id);
        this.curPost = this.posts[0];
      }else{
        console.log("err")
      }
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.page{
  display: flex;
  height: 650px;
  padding:0 20px 0 20px;
  border-bottom: 2px solid teal;
  background: #fff;
}
.main {
  border-right: 2px solid teal;
  width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main::-webkit-scrollbar {
  width: 0;

}
.navbar{
 display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid teal;
}
.navbar a{
  margin: 5px;
  padding: 5px;
}
.noteCreator{
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 1000px;
}
.toolbar{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
}
.left_toolbar{
  display: flex;
  justify-content: space-between;
}
.note_area{
  width: 100%;
}
.textArea{
  margin: 10px;
  border: none;
  outline: none;
  resize: none;
}
.textArea:focus{
  outline: none;
}
</style>