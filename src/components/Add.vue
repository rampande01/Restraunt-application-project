<template>
    <HeaderPage/>
    <h1 style="text-align: center;"> Welcome to add page for Ram'srestro</h1>
    <form class="add" @submit.prevent="addRestaurant">
        <input type="text" name = "name" v-model="restaurant.name" placeholder="Enter name" class="input-box"/>
        <input type="text" name = "contact" v-model="restaurant.contact" placeholder="Enter contact" class="input-box"/>
        <input type="text" name = "address" v-model="restaurant.address" placeholder="Enter address" class="input-box"/>
        <button type="submit" class="btn">Add new Restaurant</button>
    </form>
</template>

<script>
    import HeaderPage from './Header.vue'
    import axios from 'axios';
    export default{
         name: 'AddPage',
         components:{
            HeaderPage
         },
         data(){
            return{
                restaurant:{
                    name:'',
                    contact:'',
                    address:''
                }   
            }
         },
         methods:{
            async addRestaurant(){
                try{
                    console.warn(this.restaurant);
                    const result = await axios.post("http://localhost:3000/restaurant",{
                        name:this.restaurant.name,
                        contact:this.restaurant.contact,
                        address:this.restaurant.address
                    });
                    console.warn(result);
                    this.$router.push({ path: '/' });
                }catch(err){
                    console.error(err);
                }
            }

         },
    mounted()
    {
        let user= localStorage.getItem("user-info");
        if(!user)
    {
        this.$router.push({name : 'SignUp'});
    }
    }
    }

</script>