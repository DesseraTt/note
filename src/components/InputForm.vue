<template>
  <div class="inputContainer">
    <my-input
        v-model="login"
        type="text"
        placeholder="Логин"
        class="inp"
    ></my-input>
    <my-input
        v-model="password"
        type="text"
        placeholder="Пароль"
        class="inp"
    ></my-input>

  </div>
</template>

<script>

import MyInput from "@/components/UI/MyInput";

export default {
  components:{MyInput},
  name: "AuthorizationPage",
  data(){
    return{
      login:"",
      password:"",
      IsAuthorized:false,
    }
  },
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.inputContainer{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.inp{
  width: 300px;
}
</style>