<template>
  <div class="signup">
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <div class="submitt">
      <button type="submit">Signup</button>
      </div>
      <div>
     
       <router-link to="/login">Already have account ?</router-link>

      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post('http://localhost:3000/auth/signup', {
          name: this.name,
          email: this.email,
          password: this.password
        }).then(
        ()=>{
        this
         this.$router.push('/login');
        }        
        );
        console.log(response.data); // Handle successful signup
      } catch (error) {
        console.error(error); // Handle signup error
      }
    }
  }
};
</script>

<style>
.signup{
   transform: translate(40%);
   letter-spacing:2px;
   line-height:40px;
   
}
.signup>h2{
transform: translate(5%,50%);
.submitt{
   cursor:pointer;
}
}
</style>
