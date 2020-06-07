<template>
 <v-container fluid mt-5 >
   <v-row>
     <v-col cols="12">
        <v-row align=start>
          <v-chip
            class="ma-2 display-3"
            color="black"
            dark
            label
            x-large
          >
            <v-icon left>fiber_pin</v-icon>
           <p> {{roomNumber}} </p>
          </v-chip>
        </v-row>
      </v-col>
  </v-row>
    <v-row justify="center">
      <v-col cols="auto" v-for="(k,index) in names" :key="index">
        👨‍🎓{{k}}
        </v-col>
    </v-row>
    <div class="hr-sect">접속에서 나간 학생</div>
    <v-row justify="center">
      <v-col cols="auto" v-for="(outname,index) in outnames" :key="index">
        😱{{outname}}
        </v-col>
    </v-row>
    <div class="text-right" v-show="$store.state.user">
    <v-btn class="mx-2" fab dark x-small color="warning" @click="showtime= !showtime">
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>
    </div>
    <v-row justify="center" v-show="showtime">
      <v-col cols="12" >
        <teacher-control></teacher-control>
        </v-col>
    </v-row>

</v-container>
</template>

<script>
import TeacherControl from '@/views/TeacherControl.vue';
export default {
  components: {
    TeacherControl,
  },
    data() {
      return {
        showtime: false,
        names: [],
        outnames: [],
        roomNumber: '',
        ids: [],
        totalName: [],
        // outNam: ''
      }
    },
    methods: {

    },
    created() {
      this.roomNumber = sessionStorage.getItem('room')
      this.$socket.on('chat',(data) => {
      this.totalName.push(data)
     console.log(data.name);

      this.names.push(data.name)
      this.ids.push(data.id)
      console.log('name==1',data.name);
      this.outnames.splice(this.outnames.indexOf(data.name),1)
       })
     this.$socket.on('disconnect',(data)=>{
      const outNam = this.totalName.findIndex(x=>x.id === data)
      console.log(outNam);
      this.outnames.push(this.totalName[outNam].name)
      console.log(this.outnames);
      this.names.splice(this.names.indexOf(this.totalName[outNam].name),1)
      console.log(this.names);

     })
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
.hr-sect {
	display: flex;
	flex-basis: 100%;
	align-items: center;
	color: black;
	font-size: 12px;
	margin: 8px 0px;
}
.hr-sect::before,
.hr-sect::after {
	content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
	font-size: 0px;
	line-height: 0px;
	margin: 0px 16px;
}

</style>