<link rel="stylesheet" href="../../dist/css/app.f90189cb.css">
<template>
  <form
      @submit.prevent
      class="form"
  >
    <input-form/>
    <my-button>Войти</my-button>
  </form>

</template>

<script>
import MyButton from "@/components/UI/MyButton";
import InputForm from "@/components/InputForm";

export default {
  components:{MyButton,InputForm},
  name: "AuthorizationPage",
  data(){
    return{
      login:"",
      password:"",
      IsAuthorized:false,
    }
  }
}
</script>

<style scoped>
.form{
 padding-top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>