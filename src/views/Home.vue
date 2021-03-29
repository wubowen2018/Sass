<template>
    <div class="wraper">
        <button class="btn" @click="push('/jer_exercise')">jer_exercise</button>
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
    push(path){
        this.$router.push(path)
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.wraper{
    display: flex;
    flex: column nowrap;
    .btn{
        width: 100%;
        height: px2rem(75);
        border: none;
        background: rgb(175, 255, 14);
        color: rgb(7, 7, 7);
        font-size: px2rem(44);
        font-weight: 500;
    }

}
</style>