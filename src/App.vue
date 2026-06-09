<template>

  <router-view></router-view>

</template>

<script>

// import  SignUp from  './components/Signup.vue'
export default {
  name: 'App',
  // components:{
  //   SignUp
    
  // }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
.logo{
  width: 200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
    width: 150px;
    filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.5));
    cursor: pointer;
}
.logo:hover{
    filter: drop-shadow(0px 0px 8px rgba(0, 204, 255, 0.75));
    transform: scale(1.1);
}
.register input:hover,.login input , .add input:hover ,
.register input:focus ,.login input:focus, .add input:focus{
    border-color: #0795c9;
    box-shadow: 0 0 10px rgba(7, 149, 201, 0.4);
    outline: none;
     transform: scale(1.02);
}
.register input , .login input,.add input{
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    border: 3px solid;
}

.btn {
    width: 200px;
    background-color: rgba(7, 149, 201, 0.634);
    height: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    border: 3px solid;
}
.btn:hover{
    cursor: pointer;
    filter: drop-shadow(0px 0px 8px rgba(0, 204, 255, 0.75));
    transform: scale(1.02);

}
</style>
