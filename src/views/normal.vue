<template>
  <div class="wraper">
      <div class="trangle"></div>
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
@import '@/assets/styles/global.scss';
.wraper{
    width: 100%;
    height: 300px;
    background: url(#{$imgDirPath}01.jpg) left top no-repeat;
    background-size: 100%;

  .trangle{
    @include trangle(top,5px,#f5f5f5); 
  }
}

</style>