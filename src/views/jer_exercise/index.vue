<template>
  <div class="wrapper">
	<div class="conten">
		<div class="items" 
			v-for="item in jer_exercise_items"
			:key="item.id"
			@click="goItem(item.url)"
		>{{ item.name }}</div>
	</div>
  </div>
</template>

<script>
import {/*mapState,*/mapMutations,mapGetters,/*mapActions*/ } from 'vuex';
export default {
  data () {
    return {
             
    };
  },
  props: {
      
  },

  components: {
    
  },
  computed: {
    ...mapGetters(['jer_exercise_items'])
  },
  mounted() {
    this.$axios({
        url: '/jer_exercise_items',
        method: 'get'
    })
    .then(res=>{
        console.log(res.data)
        this.JER_EXERCISE_ITEMS(res.data)  
    })
  },
  beforeDestory() {},
  methods: {
    ...mapMutations('jer_exercise',[
      'JER_EXERCISE_ITEMS'
    ]),
	goItem(path){
		alert(path)
		// this.$router.push(path)
	}
  }
}

</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.wrapper{
	.conten{
		padding: px2rem(50);
		background-repeat: no-repeat;
		background-origin: padding-box;
		.items{
			display: flex;
			@include center();
			width: 100%;
			height: px2rem(120);
			background-color: rgb(119, 224, 243);
			font-size: px2rem(50);
			font-weight: 500;
			color: #fff;
			border-radius: px2rem(30);
			&:not(:first-child){
				margin-top: px2rem(37.5);
			}
		}
	}
}
</style>