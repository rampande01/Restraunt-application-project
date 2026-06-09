<template>
    <HeaderPage/>
    <h1 style="text-align: center;"> Welcome to Update page for Ram'srestro</h1>
    <form class="add" @submit.prevent="updateRestaurant" v-if="restaurant">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Enter name" class="input-box"/>
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter contact" class="input-box"/>
        <input type="text" name="address" v-model="restaurant.address" placeholder="Enter address" class="input-box"/>
        <button type="submit" class="btn">Update Restaurant</button>
    </form>
    <p v-else style="text-align:center;">Loading restaurant data...</p>
</template>

<script>
    import HeaderPage from './Header.vue'
    import axios from 'axios';

    export default{
         name: 'UpdatePage',
         components:{
            HeaderPage
         },
         data(){
             return {
                 restaurant: null
             }
         },
         async mounted() {
             let user = localStorage.getItem("user-info");
             if(!user) {
                 this.$router.push({name : 'SignUp'});
                 return;
             }

             const id = this.$route.params.id;
             if(!id) {
                 this.$router.push({ name: 'HomePage' });
                 return;
             }

             try {
                 const response = await axios.get(`http://localhost:3000/restaurant/${id}`);
                 this.restaurant = response.data;
             } catch (error) {
                 console.error(error);
                 this.$router.push({ name: 'HomePage' });
             }
         },
         methods: {
             async updateRestaurant() {
                 try {
                     await axios.put(`http://localhost:3000/restaurant/${this.restaurant.id}`, {
                         name: this.restaurant.name,
                         contact: this.restaurant.contact,
                         address: this.restaurant.address
                     });
                     this.$router.push({ name: 'HomePage' });
                 } catch (error) {
                     console.error(error);
                 }
             }
         }
    }
</script>