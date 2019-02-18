<template>
  <div  class='container mt-3 text-center'>
    <div class='mt-5 main'>
      <div class="jumbotron pt-2 pb-4">
        <h1 class="display-5">Character List</h1>
        <br>
        <p class="lead pStyle">Create your characters, update them anytime and show overall of all your characters with ease, based on the game rules!</p>
        <hr class="my-4">
        <router-link to='/characters/new'>
          <a class="btn btn-primary btn-md">Create New Character</a>
        </router-link>
      </div>
    </div>  
      <!-- CHARACTER PERSONAL INFO -->
    <div class='pb-0 mt-5 main rounded' v-for='data in charInfo' :key='data._id'> 
      <h5 class='font-weight-bold' style='color:white;'>{{data.title}}</h5>
      <div class="form-group smallDisplay mb-0 row ">
        <div class="col-sm-5 col-4  divPersonalDisplayMedia">
          <input
            disabled
            v-model='data.charName'
            name='charName'
            type="text" 
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            >
          <small class="form-text smallDisplayMedia mb-2">CHARACTER NAME</small>
        </div>
        <div class="col-sm-2 col-4 divPersonalDisplayMedia spinnersOff">
          <input
            disabled
            type="number"
            name='level'
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            v-model.number='data.level'
            >
          <small class="form-text smallDisplayMedia mb-2">LEVEL</small>
        </div>
        <div class="col-sm-5 col-4 divPersonalDisplayMedia">
          <input
            disabled
            v-model='data.player'
            name='player'
            type="text"
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            >
          <small class="form-text smallDisplayMedia mb-2">PLAYER</small>
        </div>
      </div>

      <div class="form-group smallDisplay mb-0 row">
        <div class="form-group col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input class="custom-select inputStyle4 h6DisplayMedia  mb-0 pr-3 pl-1"
              disabled
              v-model='data.class_'
              name='class_'>
          <small class="form-text smallDisplayMedia mb-2">CLASS</small>
        </div>
        <div class="form-group col-sm-2 col-4 text-center mb-0 divPersonalDisplayMedia">
          <input class="custom-select inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            disabled
            v-model='data.race' name='race'>
          <small class="form-text smallDisplayMedia mb-2">RACE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='data.alignment' name='alignment' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">ALIGNMENT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='data.deity' name='deity' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">DEITY</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='data.size' name='size' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">SIZE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='data.gender' name='gender' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">GENDER</small>
        </div>
      </div>

      <div class="form-group smallDisplay row">
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOff">
          <input disabled v-model='data.age' name='age' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">AGE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOff">
          <input disabled v-model='data.height' name='height' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">HEIGHT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOff">
          <input disabled v-model='data.weight' name='weight' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">WEIGHT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='data.eyes' name='eyes' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">EYES</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='data.hair' name='hair' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">HAIR</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='data.skin' name='skin' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">SKIN</small>
        </div>
      </div>

      <!-- ACTION BUTTONS -->
      <div class='float-left pt-4'>
        <router-link v-bind:to="{ name:'ShowCharacter', params:{id:data._id}}">
          <a href="#">
            <button @click='redirectAtTop()' class='btn btn-primary btn-sm'>Show Character</button>
          </a>
        </router-link>
      </div>
      <div class='float-right pt-4'>
        <router-link v-bind:to="{ name:'EditCharacter', params:{id:data._id}}">
          <a href="#">
            <button @click='redirectAtTop()' class='btn btn-warning mr-2 btn-sm'>Edit</button>
          </a>
        </router-link>
        <!-- Button trigger modal -->
        <button @click='passId(data._id)' type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
          Delete
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">This action is irreversible</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5>Are you sure?</h5> 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">No</button>
                <a><button @click='deleteCharInfo(checkId)' class='btn btn-danger btn-sm'>Yes</button></a>
              </div>
            </div>
          </div>
        </div> <!-- END OF MODAL -->
      </div>
      <br class='clearfix'>
      <hr style='margin-bottom:4rem;margin-top:4rem;'>
    </div> 
  </div>       
      <!--END OF CHARACTER PERSONAL INFO -->
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import PostsService from '@/services/PostsService'

import { AbilityModifiersMethods } from '../mixins/AbilityModifiersMethods.js'
import { TemporaryAbilityModifiersMethods } from '../mixins/TemporaryAbilityModifiersMethods.js'
import { ComputedProperties } from '../mixins/ComputedProperties.js'
import { DataProperties } from '../mixins/DataProperties.js'
import { MethodProperties } from '../mixins/MethodProperties.js'
import { SkillPoints } from '../mixins/SkillPoints.js'
export default {
    mixins:[
      AbilityModifiersMethods,
      TemporaryAbilityModifiersMethods,
      ComputedProperties,DataProperties,
      MethodProperties,SkillPoints
    ],
  name: 'Characters',
  data(){
    return{
      checkId:'',
    }
  },
  mounted(){
     this.getCharInfo()
  },
  methods:{
    async getCharInfo(){
        const result = await axios.get(`/api/charInfo`, {
          headers:{
              authorization: `Bearer ${localStorage.token}`,
            }
          })
        this.charInfo = await result.data.charInfo
    },
    async deleteCharInfo(id){
      await PostsService.deleteCharInfo(id);
      this.$router.push({name:'Characters'});
      window.location.reload();
      this.redirectAtTop();
    },
     async passId(id){
      this.checkId =  await '';
      this.checkId =  await id
    },
  },

};

</script>

<style scoped  lang='scss'>
@import "@/assets/styles/main.scss";

.main{
  background-color:rgba(20, 20, 20, 0.6);
  padding:1rem 1rem;
}
.jumbotron{
  background-color:rgba(2, 30, 41, 0.767) !important;
  -webkit-box-shadow: 0px 0px 0px 0px #e4e4e4, inset 0px 0px 30px 2px #939393; 
  box-shadow: 0px 0px 0px 0px #e4e4e4, inset 0px 0px 30px 2px #939393;
  color: #f1f1f1;
  margin: 0 auto;
}
a{
  color:white;
}
h1{
  color: #e0e0e0; 
}
.my-4{
  background-color:grey;
}
.pStyle{
  color:#b7b7b7;
}
h5{
  color:black;
}
@media screen and (max-width: 992px) {
  .input,.custom-select{
    font-size: 0.85rem !important;
  }
  .personalInput{
    font-size: 0.85rem !important;
  }
}
</style>
