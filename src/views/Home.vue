<template>
    <div class="wraper">
        <header>
            <nav>
                <a href=“##”>Home</a>
                <a href=“##”>About</a>
                <a href=“##”>Blog</a>
            </nav>
            <a href=“##”>Blog</a>

        </header>
        <div class="var">

        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
             
    };
  },

  components: {},

  computed: {},

  mounted() {},

  beforeDestory() {},

  methods: {}
}

</script>
<style lang="scss" scoped>
$main-bg:#f5f5f5;
$white:#fff;
$var-width:100%;
$var-height:100px;



.wraper{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background: $main-bg;

    nav {
        a:nth-child(n){
            color: red;
            margin-right: 10px;
            header &{
                color:green;
            }
        }  
    }
    .var{
        width: $var-height;
        height: $var-height;
        background: $white;
        border: 2px solid red;
    }
}
</style>