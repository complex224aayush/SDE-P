<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          email: this.email,
          password: this.password
        }).then(
        ()=>{
        this.$router.push('/todo');
        }
        );
        console.log(response.data); // Handle successful login
      } catch (error) {
        console.error(error); // Handle login error
      }
    }
  }
};
</script>

<style>

 .login{
     transform: translate(40%);
   letter-spacing:2px;
   line-height:40px;
 }
 .login>h2{
transform: translate(5%,50%);
}

</style>
