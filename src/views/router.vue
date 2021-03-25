<template>
  <div class="wrapper">

    sdgsdgdfgggdgf

  </div>
</template>

<script>
import {/*mapState,*/mapMutations,mapGetters,mapActions } from 'vuex';
export default {
  data () {
    return {
             
    };
  },

  components: {
  
  },
  computed: {
    ...mapGetters(['daily','fu_ji','fu_wo_cheng','xiong_tui'])

  },
  mounted() {
    this.$axios({
      url: '/daily',
      method: 'get'
    })
    .then(res=>{
      console.log(res.data)
      this.DAILY_EXERCISE(res.data)  

    })

  },
  beforeDestory() {},
  methods: {
    ...mapMutations('jer_exercise',[
      'DAILY_EXERCISE',
      'FU_JI_EXERCISE',
      'FU_WO_CHENG_EXERCISE',
      'XIONGTUI_EXERCISE'
    ]),
    ...mapActions('jer_exercise',[
      'dailyAction',
      'fu_jiAction',
      'fu_wo_chengAction',
      'xiong_tuiAction'
    ])

  },
  
}

</script>
<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tittle{
    margin: px2rem(32) auto;
    font-size: px2rem(60);
    font-weight: 600;
  }
  .middleDiv{
    flex: 1;
    display: flex;
    margin: px2rem(32) px2rem(32);
    width: 100%;
    button{
      flex: auto;
      height: px2rem(60);
      color: chocolate;
      font-size: px2rem(50);
      &:not(:first-child){
        margin-left: px2rem(40);
      }
    }
  }

}
</style>