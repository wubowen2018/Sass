<template>
  <div class="wrapper">
    <!-- {{ this.$route.name }} -->
    djhsdkds
  </div>
</template>

<script>
import  { request } from '../util/request';

export default {
  data () {
    return {
             
    };
  },

  components: {
  
  },
  computed: {
  
  },
  mounted() {
    request({
      url:"/daily"
    })
    .then(res=>{
      console.log(res.data)
    })

  },
  beforeDestory() {
  
  },
  methods: {
  
  },
}

</script>
<style lang="scss" scoped>
  
</style>