<template>
  <div>
      <v-container fluid>
        <v-row justify="center">
    <div id="chart-container2"></div>
        </v-row>
      </v-container>
    <div>
      <v-container fluid>
        <v-row justify="center">
          <!-- <button id="dispose">chart memory remove</button> -->
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
    var choiceOne = 0;
    var choiceTwo = 0;
    var choiceThree = 0;
    var choiceFour = 0;
    //   choiceFive = 0;
    this.$socket.on('test2', (data) => {
      // console.log('msg.data',msg.data);
      switch (data.choice) {
        case "1":
          choiceOne++;
          break;
        case "2":
          choiceTwo++;
          break;
        case "3":
          choiceThree++;
          break;
        case "4":
          choiceFour++;
          break;
        default:
          console.log("반응없음");
          break;
      }
      // console.log('증가',choiceOne);

      FusionCharts.items["votechart2"].setJSONData({
        chart: {
          caption: "실시간 클릭 연습입니다.",
          exportEnabled: "1",
          exportMode: "auto",
          theme: "umber"
          // exportEnabled: "1"
        },
        data: [
          {
            label: "1번",
            value: choiceOne
          },
          {
            label: "2번",
            value: choiceTwo
          },
          {
            label: "3번",
            value: choiceThree
          },
          {
            label: "4번",
            value: choiceFour
          }
        ]
      });
    });
    // Preparing the chart data
    const chartData = [
      {
        label: "1번",
        value: choiceOne
      },
      {
        label: "2번",
        value: choiceTwo
      },
      {
        label: "3번",
        value: choiceThree
      },
      {
        label: "4번",
        value: choiceFour
      }
    ];
    // Create a JSON objec
    const chartConfig = {
      type: "column2d",
      //추가
      id: "votechart2",
      renderAt: "chart-container2",
      width: "70%",
      height: "310",
      dataFormat: "json",
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "실시간 클릭 연습입니다.",
          exportEnabled: "1",
          exportMode: "auto",
          theme: "umber"
        },
        // Chart Data
        data: chartData
      }
    };



    if(FusionCharts("votechart2")){
      FusionCharts("votechart2").dispose();
}


    FusionCharts.ready(function() {
      var fusioncharts = new FusionCharts(chartConfig);
      fusioncharts.render();

    });
  }
};
</script>
