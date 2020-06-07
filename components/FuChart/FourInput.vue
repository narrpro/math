<template>
  <v-item-group>
    <v-container fluid>
      <v-container>
        <!--  first -->
        <v-row justify="center">
          <v-col md="4">
            <v-item :active1="active1">
              <!-- <v-item v-slot:default="{ active, toggle }"> -->
              <v-card
                height="200px"
                :color="active1 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click="castingVote('1')"
              >
                <div v-if="!active1" class="display-1 flex-grow-1 text-center">1번</div>
                <div v-if="active1" class="display-1 flex-grow-1 text-center">1번</div>
              </v-card>
            </v-item>
          </v-col>
          <v-col md="4">
            <v-item :active2="active2">
              <v-card
                height="200px"
                :color="active2 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click="castingVote('2')"
              >
                <div v-if="!active2" class="display-1 flex-grow-1 text-center">2번</div>
                <div v-if="active2" class="display-1 flex-grow-1 text-center">2번</div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <!-- second -->
        <v-row justify="center">
          <v-col md="4">
            <v-item :active3="active3">
              <v-card
                height="200px"
                :color="active3 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click="castingVote('3')"
              >
                <div v-if="!active3" class="display-1 flex-grow-1 text-center">3번</div>
                <div v-if="active3" class="display-1 flex-grow-1 text-center">3번</div>
              </v-card>
            </v-item>
          </v-col>
          <v-col md="4">
            <v-item :active4="active4">
              <v-card
                height="200px"
                :color="active4 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click="castingVote('4')"
              >
                <div v-if="!active4" class="display-1 flex-grow-1 text-center">4번</div>
                <div v-if="active4" class="display-1 flex-grow-1 text-center">4번</div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  data() {
    return {
      choice: "",
      active1: false,
      active2: false,
      active3: false,
      active4: false
    };
  },
  methods: {
    castingVote(choice) {
      switch (choice) {
        case "1":
          {
            this.active1 = true;
            this.active2 = false;
            this.active3 = false;
            this.active4 = false;
          }
          break;
        case "2":
          {
            {
              this.active1 = false;
              this.active2 = true;
              this.active3 = false;
              this.active4 = false;
            }
          }
          break;
        case "3":
          {
            {
              this.active1 = false;
              this.active2 = false;
              this.active3 = true;
              this.active4 = false;
            }
          }
          break;
        case "4":
          {
            {
              this.active1 = false;
              this.active2 = false;
              this.active3 = false;
              this.active4 = true;
            }
          }
          break;
        default:
          console.log(err);
          break;
      }

       this.$socket.emit('test2',{
        choice: choice,  room: sessionStorage.getItem('room')
      })
      this.choice = ''

    }
  }
};
</script>


