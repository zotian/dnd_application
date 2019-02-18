
<template>
  <div id="app" class='image'>
    <app-header></app-header>
    <keep-alive >
      <router-view :key="$route.fullPath"></router-view>
      <!-- <router-view></router-view> -->
      
      <router-view id='content-wrap' ></router-view>
    </keep-alive>
  </div>
</template>


<script>
/* eslint-disable */
import Header from '@/components/Header.vue';
export default {
    components: {
      appHeader:Header,
  },
       data(){
         return{
         }
     },
}

</script>

<style>

.image:before{
  content:"";
  display:block;
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100vh;
  z-index:-10;
  /* background: rgba(138,138,138,1);
  background: -moz-linear-gradient(-45deg, rgba(138,138,138,1) 0%, rgba(161,161,161,1) 0%, rgba(184,184,184,1) 0%, rgba(31,31,31,1) 0%, rgba(79,79,79,1) 46%, rgba(31,31,31,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(138,138,138,1)), color-stop(0%, rgba(161,161,161,1)), color-stop(0%, rgba(184,184,184,1)), color-stop(0%, rgba(31,31,31,1)), color-stop(46%, rgba(79,79,79,1)), color-stop(100%, rgba(31,31,31,1)));
  background: -webkit-linear-gradient(-45deg, rgba(138,138,138,1) 0%, rgba(161,161,161,1) 0%, rgba(184,184,184,1) 0%, rgba(31,31,31,1) 0%, rgba(79,79,79,1) 46%, rgba(31,31,31,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(138,138,138,1) 0%, rgba(161,161,161,1) 0%, rgba(184,184,184,1) 0%, rgba(31,31,31,1) 0%, rgba(79,79,79,1) 46%, rgba(31,31,31,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(138,138,138,1) 0%, rgba(161,161,161,1) 0%, rgba(184,184,184,1) 0%, rgba(31,31,31,1) 0%, rgba(79,79,79,1) 46%, rgba(31,31,31,1) 100%);
  background: linear-gradient(135deg, rgba(138,138,138,1) 0%, rgba(161,161,161,1) 0%, rgba(184,184,184,1) 0%, rgba(31,31,31,1) 0%, rgba(79,79,79,1) 46%, rgba(31,31,31,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8a8a8a', endColorstr='#1f1f1f', GradientType=1 ); */
  background:linear-gradient(rgba(50, 50, 50, 0.3), rgba(50, 50, 50, 0.3)), url('./assets/thumb-1920-379112.jpg') no-repeat center center;
  -webkit-background-size: cover; 
  -moz-background-size: cover; 
  -o-background-size: cover; 
  background-size:cover;
} 

#app{
  position: relative;
  min-height: 100vh;
}
#content-wrap{
  padding-bottom:2.5rem;
}

</style>
