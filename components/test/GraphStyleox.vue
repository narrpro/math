<template>
  <div>
      <v-container fluid>
        <v-row justify="center">
    <div id="chart-container3"></div>
        </v-row>
      </v-container>
    </div>
</template>

<script>


export default {
  data() {
    return {};
  },
  mounted() {

    var choiceOne = 0;
    var choiceTwo = 0;
  this.$socket.on('test1', (data)=>{
      switch (data.choice) {
        case '1':
          choiceOne++;
          break;
        case '2':
          choiceTwo++;
          break;
        default:
          console.log('반응없음');
          break;
      }
    // console.log('증가', choiceOne);

    FusionCharts.items['votechart3'].setJSONData({
      chart: {
        caption: '실시간 OX클릭 연습입니다.',
        exportEnabled: '1',
        exportMode: 'auto',
        theme: 'umber'
      },
      data: [
        {
          label: '참',
          value: choiceOne
        },
        {
          label: '거짓',
          value: choiceTwo
        }
      ]
    });

    });
    // Preparing the chart data
    const chartData = [
      {
        label: '참',
        value: choiceOne
      },
      {
        label: '거짓',
        value: choiceTwo
      }
    ];
    const chartConfig = {
      type: 'column2d',
      //추가
      id: 'votechart3',
      renderAt: 'chart-container3',
      width: '70%',
      height: '310',
      dataFormat: 'json',
      dataSource: {
        // Chart Configuration
        chart: {
          caption: '실시간 OX클릭 연습입니다.',
          theme: 'umber',
          exportEnabled: '1',
          exportMode: 'auto',
        },
        // Chart Data
        data: chartData
      }
    };




if(FusionCharts("votechart3")){
      FusionCharts("votechart3").dispose();
}
    FusionCharts.ready(function() {
      var fusioncharts = new FusionCharts(chartConfig);
      fusioncharts.render();
    });

}
}
</script>

