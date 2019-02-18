<template>
    <!-- Footer -->
    <footer class="page-footer font-small stylish-color-dark bg-dark  pt-4 mt-4">

        <!-- Footer Links -->
        <div class="container text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-4 mx-auto">

            <!-- Content -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit.
            </p>
            </div>

            <hr class="clearfix w-100 d-md-none">

            <div class="col-md-2 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <ul class="list-unstyled">
                <li>
                <a href="#!">Link 1</a>
                </li>
                <li>
                <a href="#!">Link 2</a>
                </li>
            </ul>
            </div>

            <hr class="clearfix w-100 d-md-none">

            <div class="col-md-2 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <ul class="list-unstyled">
                <li>
                <a href="#!">Link 1</a>
                </li>
                <li>
                <a href="#!">Link 2</a>
                </li>
            </ul>
            </div>

            <hr class="clearfix w-100 d-md-none">

            <div class="col-md-2 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
            <ul class="list-unstyled">
                <li>
                <a href="#!">Link 1</a>
                </li>
                <li>
                <a href="#!">Link 2</a>
                </li>
            </ul>
            </div>
        </div>
        </div>

        <hr>

        <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item">
            <button @click='signUp()' class="btn btn-info">Sign up!</button>
        </li>
        </ul>

        <hr>
        
        <!-- Social buttons -->
        <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1"  href='#'>
            <i class="fab fa-facebook fa-3x" style='color:#4267b2;'></i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1" href='#'>
            <i class="fab fa-twitter fa-3x" style='color:#38A1F3'> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1" href='mailto:zotiano@gmail.com.com'>
            <i class="fab fa-google-plus-g fa-3x" style='color:#dd4b39'> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1" href='https://www.linkedin.com/in/vasilis-zotos-a5b93162/'>
            <i class="fab fa-linkedin-in fa-3x" style='color:#0077B5'> </i>
            </a>
        </li>
        </ul>
        <!-- Social buttons -->

        <div class="footer-copyright text-center py-3">Designed and Developed by:
        <a href="#"> Vasilis Zotos</a>
        </div>

    </footer>
    <!-- Footer -->
</template>

<script>
/* eslint-disable */
export default {
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
    },

}
</script>

<style scoped>
    footer{
        background-color:#ACACAC !important;
        -webkit-box-shadow: 0px 0px 15px 9px #000000, inset 0px 0px 50px 35px #939393; 
        box-shadow: 0px 0px 15px 9px #000000, inset 0px 0px 50px 35px #939393;

    }
    h5{
        color:black;
    }
    hr{
        background-color:#a5a5a5;
    }
    a{
        color:#204787;
    }
    p{
        color:#3d3d3d;
    }
</style>


