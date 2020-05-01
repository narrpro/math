<template>
    <div id="chart-container">
  </div>
</template>

<script>
import Vue from 'vue'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

import * as Ably from 'ably';
const realtime = new Ably.Realtime({ key: 'KAkf3Q.SCiN9g:hQiVrtIztI6RvWYK'})

  export default {
    data() {
      return {
      }
    },
    mounted() {
            var choiceOne = 0, choiceTwo = 0, choiceThree = 0, choiceFour = 0, choiceFive = 0;
                  const myVotingChannel = realtime.channels.get('voting-channel');
                  myVotingChannel.subscribe('vote',(msg) => {
                  // console.log('msg.data',msg.data);
                  switch (msg.data) {
                    case '1': choiceOne++;
                      break;
                    case '2': choiceTwo++;
                      break;
                    case '3': choiceThree++;
                      break;
                    case '4': choiceFour++;
                      break;
                    case '5': choiceFive++;
                      break;
                    default: console.log('반응없음');
                      break;
                  }
                  // console.log('증가',choiceOne);

              FusionCharts.items['vote-chart'].setJSONData({
                'chart': {
                      'caption': '실시간 클릭 연습입니다.',
                      'theme': 'umber',
                  },
                'data': [
                  {
                    label: '1번',
                    value: choiceOne
                  },
                  {
                    label: '2번',
                    value: choiceTwo
                  },
                  {
                    label: '3번',
                    value: choiceThree
                  },
                  {
                    label: '4번',
                    value: choiceFour
                  },
                  {
                    label: '5번',
                    value: choiceFive
                  }
                ]
              })
            })
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
                  },
                  {
                    label: "5번",
                    value: choiceFive
                  }
            ];
// Create a JSON objec
        const chartConfig = {
            type: "column2d",
            //추가
            id: 'vote-chart',
            renderAt: 'chart-container',
            width: "100%",
            height: "310",
            dataFormat: "json",
            dataSource: {
                // Chart Configuration
                "chart": {
                    "caption": "실시간 클릭 연습입니다.",
                    "theme": "fusion",
                    },
                // Chart Data
                "data": chartData
                }
            };

          FusionCharts.ready(function(){
            var fusioncharts = new FusionCharts(chartConfig);
            fusioncharts.render();
            });


  }
}
</script>
