<template>
  <div>
      <v-container fluid>
        <v-row justify="center">
    <div id="chart-container3"></div>
        </v-row>
      </v-container>
    <div>
      <v-container fluid>
        <v-row justify="center">
          <!-- <v-chip id="dispose" small close color="success" text-color="white" @click="closee">
            <v-avatar>
              <v-icon>check_circle</v-icon>
            </v-avatar>그래프 초기화
          </v-chip> -->
          <!-- <button ref="clear_chart">Clear Chart</button> -->
          <!-- <button id="dispose">chart memory remove</button> -->

        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueFusionCharts from "vue-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import './fusioncharts.excelexport'

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme);

import * as Ably from "ably";
const realtime = new Ably.Realtime({ key: "E8t1hw.hiw4QQ:iD5BitLXOlaSqcJL" });

export default {
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
    // const themejs = document.createElement('script');
    // themejs.setAttribute ('src', 'https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.excelexport.js');
    // document.head.appendChild (themejs)

    var choiceOne = 0;
    var choiceTwo = 0;

    var myVotingChannel = realtime.channels.get('voting-channel3');
    myVotingChannel.subscribe('vote3', msg => {
      // console.log('msg.data',msg.data);
      switch (msg.data) {
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
    // Create a JSON objec
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
      // if(fusioncharts.items) fusioncharts.dispose();
      fusioncharts.render();
    //     function closee() {
    //     fusioncharts.dispose();
    // }
    // document.getElementById('dispose').addEventListener('click', closee);
    });
  }
};
</script>

