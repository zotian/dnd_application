<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <router-link to='/'>
        <a
          class="navbar-brand"
          href="#">
          <strong>Home</strong>
        </a> 
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarColor02"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/characters">
              <a class='nav-link' style='color:white;letter-spacing:0.03rem;'>
                <strong>Characters</strong>
              </a>
             </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/characters/new">
              <a class='nav-link' style='color:white;letter-spacing:0.03rem;'>
                <strong>New Character</strong>
              </a>
             </router-link>
          </li>
        </ul>
        <ul class=" navbar-nav navbar-right">
          <li v-if='username.length<1' class="nav-item">
            <router-link to="/signup">
              <a class='nav-link' style='color:#ffffff;letter-spacing:0.03rem;'>
                <strong>Signup</strong>
              </a>
            </router-link>
          </li>
          <li v-if='username.length<1' class=" nav-item">
            <router-link to="/login">
              <a class='nav-link' style='color:#ffffff;letter-spacing:0.03rem;'>
                <strong>Login</strong>
              </a>
            </router-link>
          </li>
          <li v-if='username.length>1' class="nav-item">
              <a class='nav-link' style='color:#ffffff;cursor:pointer;'>
                <strong  @click='logout()'>Logout</strong>
              </a>
          </li>
          <li v-if='username.length>1' class="nav-item">
            <router-link to='/characters'>
              <a  class='nav-link' style='color:#ffffff;'>
                <strong>{{username}}</strong>
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */
import { DataProperties } from '../mixins/DataProperties.js'
import axios from 'axios'

const API_URL = 'https://zotian-dnd.herokuapp.com/userId'
// const API_URL = 'http://localhost:8082/userId'


export default {
  mixins:[
      DataProperties,
    ],
  data(){
    return{
      username:'',
    }
  },  
  mounted() {
    this.seeForToken();
  },
  methods:{
      logout(){
          localStorage.removeItem('token');
          this.$router.push('/')
          this.username=''
      },
      async seeForToken(){
          const response = await axios.get(API_URL,{
          headers:{
            authorization: `Bearer ${localStorage.token}`,
          }
        })
          if(response.data.user){
            this.username = await response.data.user.username
          }else{
            localStorage.removeItem('token');
            this.$router.push('/')
          }
      }
    }
};
</script>

<style scoped>
</style>


