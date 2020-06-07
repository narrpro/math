<template>
  <div id="tt" class="ma-7">
    <v-row justify="center">
      <!-- <p class="font-italic font-weight-bold">pin : {{room}}</p> -->
      <v-expansion-panels inset focusable >
        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ①  참,거짓</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              참 거짓 OX 문제  .... 선생님께서는 사전에 PPT 작업을 하셔서 문제를 제시하시면 됩니다. 한 번만 클릭할 수 있습니다.
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test1()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ②  4지 선다형</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              4지 선다형 문제  .... 선생님께서는 사전에 PPT 작업을 하셔서 문제를 제시하시면 됩니다. 한 번만 클릭할 수 있습니다.
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test2()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ③  5지 선다형</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              5지 선다형 문제  .... 선생님께서는 사전에 PPT 작업을 하셔서 문제를 제시하시면 됩니다. 한 번만 클릭할 수 있습니다.
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test3()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ④  서술형 풀이 문제</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              서술형 풀이 문제  .... 학생들이 직접 문제를 풀고 저장한후 서버에 전송하면 선생님께서는 이미지를 불러오면 됩니다. 진행순서는 1. 문제풀기 2.저장 3.전송하기 이순서로 해주셔합니다.
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test4()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ⑤  서술형 문제풀이 실시간 공유</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              서술형 풀이 문제 공유는  .... 학생이나 선생님께서는 직접 문제를 풀어주시면 학생 개개인 모바일 화면에 실시간으로 전송됩니다.장난하지 않도록 지도하세요.
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test5()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ⑥  대기모드</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              다른 화면 전화할 때 임시 대기 화면입니다.
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test6()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ⑦ 그림저장 불러오기</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              그림 저장한 것을 DB에서 불러오기.. 학생들이 완전히 저장을 다한후 불러오세요..
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test7()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">
            ⑧ 접속현황 보기</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">
              처음 시작할 때 학생들 접속현황 보기...처음 한번만 실행합니다...
               <div class="text-right">
              <v-btn class="mx-2" fab dark x-small color="success" @click="test8()">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      room: ''
    };
  },
  created () {
    this.room = sessionStorage.getItem('room')
  },

  methods: {
    test1() {
      this.$socket.emit('pagemove', {room: this.room, show: '/test/lv0'})
    },
    test2() {
      this.$socket.emit('pagemove', {room: this.room, show: '/test/lv1'})
    },
    test3() {
      this.$socket.emit('pagemove', {room: this.room, show: '/test/lv2'})
    },
    test4() {
      this.$socket.emit('pagemove', {room: this.room, show: '/draw'})
    },
    test5() {
      this.$socket.emit('pagemove', {room: this.room, show: '/p5test'})
    },
    test6() {
      this.$socket.emit('pagemove', {room: this.room, show: '/daegi'})
    },
    test7() {
      this.$socket.emit('pagemove', {room: this.room, show: '/imageDB'})
    },
    test8() {
      this.$socket.emit('pagemove', {room: this.room, show: '/teacherone'})
    },
  },
  }
</script>

<style scoped>
#tt {
  font-family: "Nanum Gothic", Arial, sans-serif; /* this was it */
}
</style>