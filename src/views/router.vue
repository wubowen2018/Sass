<template>
  <div class="wrapper">
    <div class="content" v-if="daily">
      <div class="item"
        v-for="(item) in daily"
        :key="item.id"
      >
        <label class="subKey">日期:</label>
        <label class="subValue">{{ item.date }}</label>

        <div class="itemLine">
          <label class="subKey1">公里数:</label>
          <label class="subValue1">{{ item.run.miles }}</label>
        </div>
        <div class="itemLine">
          <label class="subKey1">平均耗时:</label>
          <label class="subValue1">{{ item.run.timeAverage }}</label>
        </div>
        <div class="itemLine">
          <label class="subKey1">深蹲:</label>
        <label class="subValue1">{{ item.shen_dun }}</label>
        </div>
        <div class="itemLine">
          <label class="subKey1">波比跳:</label>
        <label class="subValue1">{{ item.bobi_jump }}</label>
        </div>
        <div class="itemLine">
          <label class="subKey1">心情:</label>
        <label class="subValue1">{{ item.emotion }}</label>
        </div>
        
      </div>
    </div>

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
  .content{
    flex:1;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    .item{
      border: px2rem(1) solid #ccc;
      border-radius: px2rem(15);
      height: px2rem(370);
      &:not(:first-child){
        margin-top: px2rem(25);
      }
      position: relative;

      .subKey,.subValue{
        position: absolute;
        top: px2rem(20);
        font-size: px2rem(37.5);
        font-weight: 500;
      }
      .subKey{
        color: #262626;
        left: px2rem(20);
        
      }
      .subValue{
        color: cornflowerblue;
        left: px2rem(120);
        font-size: px2rem(37.5);
      }
      div:first-of-type{
        margin-top: px2rem(90);
    }
      .itemLine{
        position: relative;
        height: px2rem(50);
        
        .subKey1,.subValue1{
        position: absolute;
        font-weight: 500;
        }
        .subKey1{
          color: #999;
          left: px2rem(30);
        }
        .subValue1{
          color: #aaa;
          right: px2rem(30);
          text-align: right;
          width: px2rem(700);
        }
      }

      




    }
  }
    
  

}
</style>