<template>
  <v-item-group>
    <v-container fluid>
      <v-container>
        <v-row justify="center">
          <v-col md="4">
            <v-item :active1="active1">
              <!-- <v-item v-slot:default="{ active, toggle }"> -->
              <v-card
                height="150px"
                :color="active1 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click.once="castingVote('1')"
              >
                <div v-if="!active1" class="display-1 flex-grow-1 text-center">참</div>
                <div v-if="active1" class="display-1 flex-grow-1 text-center">참</div>
              </v-card>
            </v-item>
          </v-col>
          <v-col md="4">
            <v-item :active2="active2">
              <v-card

                height="150px"
                :color="active2 ? 'yellow darken-4' : 'green'"
                class="d-flex align-center"
                dark
                @click.once="castingVote('2')"
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
import * as Ably from "ably";

const realtime = new Ably.Realtime({ key: "E8t1hw.hiw4QQ:iD5BitLXOlaSqcJL" });
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
      const myVotingChannel = realtime.channels.get("voting-channel3");
      myVotingChannel.publish("vote3", choice, err => {
        console.log(err);
      });
    }
  }
};
</script>


