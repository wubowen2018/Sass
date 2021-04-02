<template>
    <div class="wraper">
        <div id="chart" class="echartDiv"></div>
    </div>
</template>

<script>
const Echarts =  require('echarts/lib/echarts')

require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
    data() {
        return {

        }
    },
    props: {

    },
    methods: {

    },
    mounted() {
        // console.log(this.$route.name);
        let chartDom = document.getElementById('chart')
        let myEchart = Echarts.init(chartDom)
        console.log(myEchart);

    }
}

</script>
<style lang="scss" scoped>
    .wraper{
        padding: px2rem(50);
        .echartDiv{
            width: 300px;
            height: 300px;

        }
    }
</style>