<template>
    <img class = "logo" src="../assets/logo.png" alt="logo">
    <h1 style="text-align: center; text-shadow: 1px 1px 5px black;"> Login </h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button class="btn" @click="login">Login</button>
        <p>
            <router-link to="/signup">Signup here</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        name: 'LoginPage',
        data()
        {
            return{
                email:'',
                password:''
            }
        },
        methods:{
            async login()
            {
                let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
                console.warn(result);
                         if (result.status==200 && result.data.length > 0)
            {
                // alert("Login done")
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name : 'HomePage'});
            }
            }

        },
        // redirection to home page ,if user is already logged in
            mounted() 
                    {
                        let user= localStorage.getItem("user-info");
                        if(user)
                    {
                        this.$router.push({name : 'HomePage'});
                    }
                    }
    }
</script>


