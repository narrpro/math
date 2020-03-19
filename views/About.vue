<template>

 <v-item-group>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'green' : 'green lighten-5'"
              class="d-flex align-center"
              height="90"
              @click.once="toggle"
            >
                <div
                  class="display-3 flex-grow-1 text-center"
                >
                  1 번
                </div>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'green' : 'green lighten-5'"
              class="d-flex align-center"
              height="90"
              @click.once="toggle"
            >
                <div
                  class="display-3 flex-grow-1 text-center"
                >
                  2 번
                </div>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'green' : 'green lighten-5'"
              class="d-flex align-center"
              height="90"
              @click.once="toggle"
            >
                <div
                  class="display-3 flex-grow-1 text-center"
                >
                  3 번
                </div>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'green' : 'green lighten-5'"
              class="d-flex align-center"
              height="90"
              @click.once="toggle"
            >
                <div
                  class="display-3 flex-grow-1 text-center"
                >
                  4 번
                </div>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'green' : 'green lighten-5'"
              class="d-flex align-center"
              height="90"
              @click.once="toggle"
            >
                <div
                  class="display-3 flex-grow-1 text-center"
                >
                 5 번
                </div>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>

      </v-row>
    </v-container>
  </v-item-group>

</template>

<script>
export default {

}
</script>