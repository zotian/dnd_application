<template>
  <div>
    <div class='loading' v-if='logingIn'>
        <img src="../assets/Spinner-1s-200px.svg" alt="">
    </div>
    <div v-if='!logingIn' class="form">     
      <ul class="tab-group">
        <li  class="tab">
            <router-link to="/signup">
              <a  class='transparent'>Signup</a>
             </router-link></li>
        <li class="tab active">          
            <router-link to="/login">
              <a class='transparent'>Login</a>
             </router-link></li>
      </ul>      
      <div class="tab-content" >      
        <div>   
          <h1>Welcome Back!</h1> 
          <div v-if='errorMessage.length>1' class="alert alert-danger" role="alert">
              {{ errorMessage }}
          </div>         
          <form @submit.prevent="login()">        
            <div class="field-wrap">
              <label>
                Username<span class="req">*</span>
              </label>
              <input v-model='user.username' type="text" required/>
                  <h6 id="usernameHelp" class="form-text text-muted">
                    Enter you username.
                  </h6>
            </div>        
            <div class="field-wrap">
              <label>
                Password<span class="req">*</span>
              </label>
              <input v-model='user.password' type="password" required/>
                <h6 id="passwrodHelp" class="form-text text-muted">
                    Enter you password.
                </h6>
            </div>        
            <button type='submit' class="button button-block">Login</button>        
          </form>
        </div>      
      </div><!-- tab-content -->    
    </div> <!-- /form -->
  </div>  
</template>


<script>
/* eslint-disable */
import Joi from 'joi';
import { User } from '../mixins/User.js';

const LOGIN_URL = '/auth/login';

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_!@#$%^&*]+$)/).min(2).max(30).required(),
    password: Joi.string().trim().min(8).required(),
})

export default {
  name: 'LogIn',
    mixins:[
      User,
    ],
    data:()=>({
        logingIn: false,
        errorMessage: '',
        user:{
            username: '',
            password: '',
        },
    }),
    methods:{
      login(){
        this.errorMessage = '';
        if(this.validUser()){
          this.logingIn= true
          const body= {
            username: this.user.username,
            password: this.user.password,

          };
          fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(body)
          }).then(response => {
              if(response.ok) {
                  return response.json();
              }
              return response.json().then(error => {
                  throw new Error(error.message)
              })
          }).then(result => {
              // save the token to local storage.
              localStorage.token = result.token;
              setTimeout(() => {
                  this.logingIn = false;
                  window.location.reload();
                  setTimeout(() => {
                    this.$router.push('/characters')
                    this.redirectAtTop();
                  },100)                  
              }, 400)
          }).catch(error => {
              setTimeout(() => {
                  this.logingIn = false;
                  this.errorMessage = error.message
              }, 1000)

          })
        }
      },
      validUser(){
        const result = Joi.validate(this.user, schema);
        if(result.error === null){
            return true;
        } else{
            if(result.error.message.includes('username')){
                this.errorMessage = 'Username is invalid'
            } else{
                this.errorMessage = 'Password is invalid'  
            }
            return false;
        }
      },
      redirectAtTop(){
        $(document).ready(function(){
            $(this).scrollTop(0);
        });
      }
    }  
}    
</script>

<style scoped lang='scss'>
@import "@/assets/styles/register.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.loading{
  position: absolute;
  top: 30%;
  left: 45%;
}
</style>


