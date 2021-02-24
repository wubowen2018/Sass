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
        <button @click="handleClick()">random</button>
        <button class="btn" @click="push('/normal')">GoNormal</button>
        <div class="box">
            <div class="container1"></div>
            <div class="container2"></div>
            <div class="container3"></div>
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

  methods: {
    handleClick(){
        let random = Math.random() * 50 + 1
        let randomInteger = Math.floor(random)
        alert(randomInteger)
    },
    push(path){
        this.$router.push(path)
    }
  }
}

</script>
<style lang="scss" scoped>
$main-bg:#f5f5f5;
$white:#fff;
$var-width:100%;
$var-height:100px;

@mixin bgcNoParam(){
    background: rgb(0, 0, 0);
}

@mixin backgroundColor($color){
    background: $color;
}



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
    button{
        border: 1px solid red;
    }
    .btn{
        width: 125px;        
        height: 50px;
        background: cyan;
        border-radius: 15px;
        margin: 20px auto;
        color: darkorange;
        font: {
            size: 20px;
            weight: 600;
        };
    }
    .box{
        flex: 1;
        display: flex;
        flex-flow: row nowrap;
        @include center();
        border-radius: 15px;
        background: chartreuse;
        padding: 20px;

        div{
            width: 100px;
            height: 100px;
            margin: 0 10px;
            @include bgcNoParam();
            &:first-child{
                background: #e67e1e;
            }
            
        }
        
        
        
    }
}
</style>