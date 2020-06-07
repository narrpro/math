<template>
  <v-item-group>
    <v-container fluid>
      <v-container>
        <v-row justify="center">
          <v-col md="4">
            <v-item :active1="active1">
              <v-card
                height="250px"
                :color="active1 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click="castingVote('1')"
              >
                <div v-if="!active1" class="display-1 flex-grow-1 text-center">참</div>
                <div v-if="active1" class="display-1 flex-grow-1 text-center">참</div>
              </v-card>
            </v-item>
          </v-col>
          <v-col md="4">
            <v-item :active2="active2">
              <v-card

                height="250px"
                :color="active2 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click="castingVote('2')"
              >
                <div v-if="!active2" class="display-1 flex-grow-1 text-center">거짓</div>
                <div v-if="active2" class="display-1 flex-grow-1 text-center">거짓</div>
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
      ss: true,
      active1: false,
      active2: false
    };
  },
  methods: {
    castingVote(choice) {
      switch (choice) {
        case "1":
          {
            this.active1 = true;
            this.active2 = false;
            this.ss = false;
          }
          break;
        case "2":
          {
            {
              this.active1 = false;
              this.active2 = true;
              this.ss = false;
            }
          }
          break;
        default:
          console.log(err);
          break;
      }
      this.$socket.emit('test1',{
        choice: choice,  room: sessionStorage.getItem('room')
      })
      this.choice = ''
    }
  }
};
</script>


