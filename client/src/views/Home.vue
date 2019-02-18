<template>
  <div class='container mt-3 text-center rounded'>
    <div class="jumbotron pt-3 pb-4">
      <h1 class="display-4">DND Character Creation</h1>
      <br>
      <p class="lead pStyle">Create your characters, update them anytime and show overall of all your characters with ease, based on the game rules!</p>
      <hr class="my-4">
      <p class='pStyle'>Create your account and start to create your characters without limits!</p>
      <a class="btn btn-primary btn-md" @click='signUp()'>Get Started!</a>
    </div>

  <br><br><br>

  <div class="row jumbotron pt-4 pb-4 pl-1 pr-1">
    <div class="col-lg-9 col-md-12">
      <div class="card-deck ">
        <div class="card">
          <img src="../../src/assets/characters.jpg" class="card-img-top">
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-12" >
       <div class="card-deck " >
        <div class="card cardStyle">
          <h2>Overview</h2>
          <hr>
          <h3 style='font-style:italic;'>List of All Characters</h3>
          <hr>
          <p class='lead pStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae sequi officia accusamus quis</p>
        </div>
      </div>     
    </div>
  </div>

  <br><br><br>

  <div class="row jumbotron pt-4 pb-4 pl-1 pr-1">
    <div class="col-lg-9 col-md-12">
      <div class="card-deck ">
        <div class="card">
          <img src="../../src/assets/info.jpg" class="card-img-top">
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-12" >
       <div class="card-deck " >
        <div class="card cardStyle">
          <h2>Overview</h2>
          <hr>
          <h3 style='font-style:italic;'>Character's information and abilities</h3>
          <hr>
          <p class='lead pStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae sequi officia</p>
        </div>
      </div>     
    </div>
  </div>

  <br><br><br>

  <div class="row jumbotron pt-4 pb-4 pl-1 pr-1">
    <div class="col-lg-9 col-md-12">
      <div class="card-deck ">
        <div class="card">
          <img src="../../src/assets/saves.jpg" class="card-img-top">
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-12" >
       <div class="card-deck " >
        <div class="card cardStyle">
          <h2>Overview</h2>
          <hr>
          <h3 style='font-style:italic;'>Character's stats</h3>
          <hr>
          <p class='lead pStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae sequi officia adipisicing elit</p>
        </div>
      </div>     
    </div>
  </div>

  <br><br><br>

  <div class="row jumbotron pt-4 pb-4 pl-1 pr-1">
    <div class="col-md-6">
      <div class="card-deck ">
        <div class="card">
          <img src="../../src/assets/skills.jpg" class="card-img-top">
        </div>
      </div>
    </div>
    <div class="col-md-6" >
       <div class="card-deck " >
        <div class="card cardStyle">
          <h2>Overview</h2>
          <hr>
          <h3 style='font-style:italic;'>Character's skills</h3>
          <hr>
          <p class='lead pStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae sequi officia accusamus quis, officiis quia nemo autem</p>
          <hr>
          <div class="card-deck ">
          <div class="card">
            <img src="../../src/assets/skillsFavorite.jpg" class="card-img-top">
          </div>
          <br>
          <p class='mt-4 lead pStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.officiis quia </p>
        </div>
        </div>
      </div>     
    </div>
  </div>

  <br><br><br>

  <div class="row jumbotron pt-4 pb-4 pl-1 pr-1">
    <div class="col-lg-9 col-md-12">
      <div class="card-deck ">
        <div class="card">
          <img src="../../src/assets/feats.jpg" class="card-img-top">
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-12" >
       <div class="card-deck " >
        <div class="card cardStyle">
          <h2>Overview</h2>
          <hr>
          <h3 style='font-style:italic;'>Feats</h3>
          <hr>
          <p class='lead pStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae sequi officia accusamus quis, officiis quia nemo autem impedit explicabo quaerat cumque repudiandae</p>
        </div>
      </div>     
    </div>
  </div>

  <br><br><br>
  
  </div>
</template>


<script>
export default {
  /* eslint-disable */ 
  name: 'Home',
  methods:{
    async signUp(){
      await this.$router.push({name:'SignUp'});
      this.redirectAtTop();
    },
    redirectAtTop(){
        $(document).ready(function(){
            $(this).scrollTop(0);
        });
    }
  }

};
</script>

<style scoped>
.container{
  background-color:rgba(20, 20, 20, 0.75);
  padding:1rem 1rem;
}
.jumbotron{
  background-color:rgba(2, 30, 41, 0.767) !important;
  -webkit-box-shadow: 0px 0px 0px 0px #e4e4e4, inset 0px 0px 30px 2px #939393; 
  box-shadow: 0px 0px 0px 0px #e4e4e4, inset 0px 0px 30px 2px #939393;
  color: #f1f1f1;
  margin: 0 auto;
}
h1,h2,h3{
  color: #e0e0e0; 
}
hr{
  background-color:grey;
}
.cardStyle{
   background:transparent;
   border:0px;
}
.pStyle{
  color:#b7b7b7;
}
</style>

