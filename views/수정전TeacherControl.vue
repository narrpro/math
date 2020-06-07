<template>
  <div id="tt" class="ma-7">
    <v-row justify="center">
      <v-expansion-panels inset focusable >
        <v-expansion-panel
          v-for="(item,index) in items"
          :key="index"
        >
          <v-expansion-panel-header class="subtitle-2 font-weight-black" color="#C5E1A5">{{index+1}})   {{item.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="caption" color="#F1F8E9">{{item.content}}
               <div class="text-right">
                 {{`test${index+1}`}}
                <!-- <router-link :to="item.to"><v-btn class="mx-2" fab dark x-small color="success" @click="`$router.push('${item.to}')`"> -->
                <v-btn class="mx-2" fab dark x-small color="success" @click="`test${index+1}`">
                 go
                </v-btn>
               </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-btn @click="test7">test</v-btn>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      room: sessionStorage.getItem('room'),
      items: [
        {title: "참,거짓", content: "참 거짓 OX 문제  .... 선생님께서는 사전에 PPT 작업을 하셔서 문제를 제시하시면 됩니다. 한 번만 클릭할 수 있습니다."},
        {title: "4지 선다형", content: "4지 선다형 문제  .... 선생님께서는 사전에 PPT 작업을 하셔서 문제를 제시하시면 됩니다. 한 번만 클릭할 수 있습니다." },
        {title: "5지 선다형", content: "5지 선다형 문제  .... 선생님께서는 사전에 PPT 작업을 하셔서 문제를 제시하시면 됩니다. 한 번만 클릭할 수 있습니다." },
        {title: "서술형 풀이 문제", content: "서술형 풀이 문제  .... 학생들이 직접 문제를 풀고 저장한후 서버에 전송하면 선생님께서는 이미지를 불러오면 됩니다. 진행순서는 1. 문제풀기 2.저장 3.전송하기 이순서로 해주셔합니다." },
        {title: "서술형 문제풀이 실시간 공유", content: "서술형 풀이 문제 공유는  .... 학생이나 선생님께서는 직접 문제를 풀어주시면 학생 개개인 모바일 화면에 실시간으로 전송됩니다.장난하지 않도록 지도하세요."},
        {title: "대기모드", content: " 다른 화면 전화신 임시 대기 화면입니다."},
        {title: "접속자현황", content: "처음화면 접속자화면 대기 순서 보기"},
        ]
    };
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