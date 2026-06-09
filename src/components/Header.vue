<template>

    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restraunt</router-link>
        <a  @click="logout" href="#">Logout</a>
    </div>

</template>



<script>
    export default{
        name: 'HeaderPage',
        methods:{
            logout()
            {
                localStorage.clear();
                this.$router.push({name : 'LoginPage'});
            }
        }

    }

</script>

<style>
    .nav{
        background-color: #667c84;
        overflow: hidden;
    }
    .nav a{
        float: left;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: solid;
        font-size: 17px;
        margin-right: 4px;
    }
    .nav a:hover{
        background-color: #ddd;
        color: black;
    }
</style>