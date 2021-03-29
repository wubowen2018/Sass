<template>
  <div id="app">
    <jer-header 
      :title1="title" 
      @back_fun="back_fun()"
      class="topHeader"
    />

    <div class="main">
      <router-view/>
      <div class="space"></div>
    </div>

    <div class="navigate">
      <router-link to="/home" class="dashboad">首页</router-link>
      <router-link to='/router' class="found">发现</router-link>
      <router-link to='/normal' class="mine">我</router-link>
    </div>

  </div>
</template>

<script>
import JerHeader from './components/common/JerHeader.vue'

export default {
  components: { JerHeader },
  data(){
    return {
      
    }  
  },
  methods:{
    back_fun() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }

  },
  computed:{
    title(){
      return this.$route.name
        
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;


  .topHeader{
    width: 100%;
    position: fixed;
    top: 0;
    background: #f5f5f5;
    z-index: 100;
  }
  .main{
    margin-top: px2rem(114);
    margin-bottom: px2rem(114);
    flex: 0 0 auto;
    .space{
      width: 100%;
      height: px2rem(113);
    }
  }

  .navigate{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 44px;
    background: #f5f5f5;
    box-shadow: 0 -1px 2px #eeeeee;

    .dashboad{
      flex: auto;
      display: flex;
      @include center();

    }

    .found{
      flex: auto;
      display: flex;
      @include center();

    }
    .mine{
      flex: auto;
      display: flex;
      @include center();

    }
    .router-link-active{
      color: chocolate;
    }
  }

}
</style>
