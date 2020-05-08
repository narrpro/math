<template>
  <div>
    <v-container fluid>
        <v-row justify="center">
    <div id="chart-container1"></div>
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
import Vue from "vue";
import * as VueFusionCharts from "vue-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import './fusioncharts.excelexport';

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme);

import * as Ably from "ably";
const realtime = new Ably.Realtime({ key: "E8t1hw.hiw4QQ:iD5BitLXOlaSqcJL" });

export default {
  data() {
    return {};
  },
  methods: {
    closee() {
      this.$router.go();
      // this.$forceUpdate();
      // if (this.fusioncharts !== undefined) {
      //   this.fusioncharts.dispose();
      //   console.log("here", this);
      // }
    }
  },
  mounted() {
        // const themejs = document.createElement("script");
        // themejs.setAttribute ("src", "https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.excelexport.js");
        // document.head.appendChild (themejs);


    var choiceOne = 0,
      choiceTwo = 0,
      choiceThree = 0,
      choiceFour = 0,
      choiceFive = 0;
    var myVotingChannel = realtime.channels.get("voting-channel1");
    myVotingChannel.subscribe("vote1", msg => {
      // console.log('msg.data',msg.data)
      switch (msg.data) {
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
        case "5":
          choiceFive++;
          break;
        default:
          console.log("반응없음");
          break;
      }
      // console.log('증가',choiceOne)

      FusionCharts.items["votechart1"].setJSONData({
        chart: {
          caption: "실시간 클릭 연습입니다.",
          exportEnabled: "1",
          exportMode: "auto",
          theme: "umber"
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
          },
          {
            label: "5번",
            value: choiceFive
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
      id: "votechart1",
      renderAt: "chart-container1",
      width: "70%",
      height: "310",
      dataFormat: "json",
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "실시간 클릭 연습입니다.",
          exportEnabled: "1",
          exportMode: "auto",
          theme: "umber",
        },
        // Chart Data
        data: chartData
      }
    };


    if(FusionCharts("votechart1")){
      FusionCharts("votechart1").dispose();
}


    FusionCharts.ready(function() {
      var fusioncharts = new FusionCharts(chartConfig);
      fusioncharts.render();
       // console.log("here", fusioncharts);
    //     function closee() {
    //     fusioncharts.dispose();
    // }
    // document.getElementById("dispose").addEventListener("click", closee);
    });
  }
};
</script>
