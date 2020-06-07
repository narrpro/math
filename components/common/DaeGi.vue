<template>
  <div>
    <student-wait></student-wait>
    <v-container>
    <v-row justify="center">
      <v-col cols="12">
       <v-card color="transparent" flat>
            <div>
              <v-alert
                border="right"
                colored-border
                color="success"
                icon="pan_tool"
                dense
                type="info"
                elevation="2"
                class="subtitle-2 text-left"
              >
              다른학생이 입력할 동안 기다려주세요🥱
              </v-alert>
              <v-alert
                border="right"
                colored-border
                color="success"
                icon="refresh"
                dense
                type="info"
                elevation="2"
                class="subtitle-2 text-left"
              >
              새로고침을하면 재접속이 어렵습니다😭
              </v-alert>
              <v-alert
                border="right"
                colored-border
                color="success"
                icon="directions_run"
                dense
                type="info"
                elevation="2"
                class="subtitle-2 text-left"
              >
              브라우저를 나가면 재접속이 안됩니다😱
              </v-alert>

            </div>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import StudentWait from '@/components/test/StudentWait.vue';
  export default {
    components: {
      StudentWait,
    },
    mounted () {
      this.$socket.on('pagemove',(data)=>{
      console.log(data.show)
      this.$router.push(data.show).catch(err=>{})
      });
    },

  }
</script>

<style scoped>

</style>