<template>
  <div>
<canvas ref="myChart" id="myChart" width="300" height="250"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  props: ['propsdata'],
  mounted () {
    // var ctx = this.$refs.myChart

    var myChart = new Chart(this.$refs.myChart, {
        type: 'bar',
        data: {
        labels: ['1번', '2번', '3번', '4번'],
        // labels: ['1번', '2번', '3번', '4번', '5번'],
        datasets: this.propsdata
        },
        options: {
        legend: {
            display: false
        },
        // true 이면  반응형 크기
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        // onClick: function(){
        //     this.$emit('refresh:chart')
        // }
    }
});
  }
  }
</script>

<style scoped>

</style>