<template>
    <div class="wraper">
        <div id="chart" class="echartDiv"></div>
    </div>
</template>

<script>
const Echarts =  require('echarts')

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

        // console.log(myEchart);
		
        // 绘制图表
        myEchart.setOption({
            title: {
                text: 'J.E.R 运动'
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ['跑步', '胸推', '俯卧撑', '平板撑', '深蹲', '摸踝']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [20, 40, 50, 5, 90, 60]
            }]
        });

    }
}

</script>
<style lang="scss" scoped>
    .wraper{
        padding: px2rem(50);
        .echartDiv{
            width: 400px;
            height: 400px;

        }
    }
</style>