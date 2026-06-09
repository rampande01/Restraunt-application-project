<template>
    <HeaderPage/>
    <h1 style="text-align: center;"> Hello {{name}} , Welcome to Home page </h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>

        </tr>
        <tr v-for="item in restaurant" :key="item.id"> 
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="`/update/${item.id}`"> Update </router-link>
                <button type="button"  @click="deleteRestaurant(item.id)"> Delete </button>
            </td>
        </tr>
    </table>
</template>

<script>
    import HeaderPage from './Header.vue'
    import axios from 'axios';
    export default{
         name: 'HomePage',
         components:{
            HeaderPage
         },
         methods:{
             async deleteRestaurant(id){
                 try{
                     const res = await axios.delete(`http://localhost:3000/restaurant/`+id);
                     if (res.status === 200){
                         await this.loadData();
                     }
                 }catch(err){
                     console.error(err);
                 }
             },
             async loadData(){
                 let user= localStorage.getItem("user-info");
                 if(!user)
                 {
                     this.$router.push({name : 'SignUp'});
                     return;
                 }
                 this.name=JSON.parse(user).name;
                 let result= await axios.get('http://localhost:3000/restaurant');
                 this.restaurant = result.data;
             }
         },
         data(){
            return{
                name:'',
                restaurant: []
            }
         },
    async mounted()
    {
       this.loadData();
    }
    }

</script>

<style>
table {
  width: 90%;
  max-width: 900px;
  margin: 30px auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
th {
  background: #0a6ebd;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.95rem;
}
tr:hover {
  background: #e8f1ff;
}
td {
  color: #333333;
}

</style>