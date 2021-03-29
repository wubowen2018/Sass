<template>
  <div class="wrapper">
		<input class="btn" type="button" value="<" @click="back_fun()" />
    <div class="titleDiv">{{tiltle1}}</div>
		<div class="rightDiv"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    
		}
  },
  props: {
		tiltle1:{
			type: String,
			default: 'J.E.R'
		}
  },

  components: {
    
  },
  computed: {
    
  },
  mounted() {
    
  },
  beforeDestory() {
    
  },
  methods: {
    back_fun(){
			this.$emit('back_fun')
		}
  },
}

</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
	.wrapper{
		display: flex;
		height: px2rem(112.5);
		box-shadow: 0px 1px 2px #eeeeee;
		.btn{
			flex: 0 0 px2rem(112.5);
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: px2rem(112.5);
			border: none;
			background: none;

		}
		.titleDiv{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;

		}
		.rightDiv{
			flex: 0 0 px2rem(112.5);
		}

	}
</style>