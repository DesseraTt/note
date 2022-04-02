<template>
 <div class="app">
   <router-view></router-view>
 </div>
</template>
<script>
export default {
  components: {
  },
  data(){
    return {
     isAuthorized:false,
      userLogin: '',
      userPassword: '',
    }}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}
*::-webkit-scrollbar-track {
  background: #fff;
}
*::-webkit-scrollbar-thumb {
  background-color: teal;
  border-radius: 10px;
  border: 4px solid #fff;
}
.app {
  display: block;
  background: #f8f8f8;
  height: 100vh;
}

</style>