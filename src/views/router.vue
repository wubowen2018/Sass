<template>
  <div class="wrapper">

    djhsdkds
    <h3>{{$store.state.count}}</h3>

    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>

  </div>
</template>

<script>

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
    this.$axios({
      url: '/daily',
      method: 'get'
    })
    .then(res=>{
      console.log(res.data)
      console.log(this.$store.state)
      // this.$store.jer_exercise.commit('DAILY_EXERCISE',res.data)

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