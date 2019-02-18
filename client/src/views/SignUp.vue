<template>
  <div>
    <div class='loading' v-if='signingUp'>
        <img src="../assets/Spinner-1s-200px.svg" alt="">
    </div>
    <div v-if='!signingUp' class="form">     
      <ul class="tab-group">
        <li class="tab active" >
            <router-link to="/signup">
              <a class='transparent'>Signup</a>
             </router-link></li>
        <li class="tab">          
            <router-link to="/login">
              <a class='transparent'>Login</a>
             </router-link></li>
      </ul>      
      <div class="tab-content" >      
        <div>   
          <h1>Create Account!</h1> 
          <div v-if='errorMessage.length>1' class="alert alert-danger" role="alert">
              {{ errorMessage }}
          </div>         
          <form @submit.prevent="signup">        
            <div class="field-wrap">
              <label>
                Username<span class="req">*</span>
              </label>
              <input v-model='user.username' type="text" required/>
                  <h6 id="usernameHelp" class="form-text text-muted">
                    Username must be longer than 2 characters and shorter than 30.
                  </h6>
            </div>        
            <div class="field-wrap">
              <label>
                Password<span class="req">*</span>
              </label>
              <input v-model='user.password' type="password" required/>
                <h6 id="passwrodHelp" class="form-text text-muted">
                    Password must be 8 or more characters long.
                </h6>
            </div>
            <div class="field-wrap">
              <label>
                Confirm Password<span class="req">*</span>
              </label>
              <input v-model='user.confirmPassword' type="password" required/>
                <h6 id="passwrodHelp" class="form-text text-muted">
                    Please confirm your password.
                </h6>
            </div>         
            <button type='submit' class="button button-block">Signup</button>        
          </form>
        </div>      
      </div><!-- tab-content -->    
    </div> <!-- /form -->
  </div>  
</template>


<script>
/* eslint-disable */
import Joi from 'joi';
const SIGNUP_URL = '/auth/signup';

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_!@#$%^&*]+$)/).min(2).max(30).required(),
    password: Joi.string().trim().min(8).required(),
    confirmPassword: Joi.string().trim().min(8).required()
})


export default {
    data:()=>({
        signingUp: false,
        errorMessage: '',
        user:{
            username: '',
            password: '',
            confirmPassword: ''
        },
    }),
    name: 'SignUp',
    watch:{
        user:{
            handler(){
                this.errorMessage = '';
            },
            deep: true
        }
    },
    methods:{
        signup(){
            this.errorMessage = '';
            if(this.validUser()){
                // send data to server
                const body= {
                    username: this.user.username,
                    password: this.user.password,
                }
                this.signingUp = true;
                fetch(SIGNUP_URL, {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers:{
                        'content-type' : 'application/json',
                    }
                }).then(response => {
                    if(response.ok) {
                        return response.json();
                    }
                    return response.json().then(error => {
                        throw new Error(error.message)
                    })
                }).then(result => {
                    localStorage.token = result.token;
                    setTimeout(() => {
                        this.signingUp = false;
                        this.$router.push('/characters')
                        window.location.reload();
                        this.redirectAtTop();
                    }, 1000)
                }).catch(error => {
                    setTimeout(() => {
                        this.signingUp = false;
                        this.errorMessage = error.message
                    }, 1000)

                })
            }
        },
        validUser(){
            if(this.user.password != this.user.confirmPassword){
                this.errorMessage = 'Passwords must match';
                return false;
            }
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


