<template>
  <div id="app">
    <jer-header :title1="title" @back_fun="back_fun()"></jer-header>
    
    <router-view/>

    <div class="navigate">
      <router-link to="/" class="dashboad">首页</router-link>
      <router-link to='/router' class="found">发现</router-link>
      <router-link to='/hi/hi1' class="mine">我</router-link>
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
      //alert(this.$route.name)
      return this.$route.name
        
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/styles/global.scss';

*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app{
  width: 100%;
  height: 100%;
}
.navigate{
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 44px;
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
</style>
