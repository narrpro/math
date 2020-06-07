<template>
    <div>
      <v-container fluid>
        <v-row justify="center">
             <v-col  cols="11">
                <in-canvas :canvas-id="'canvas-one'" ref="childCanvas"></in-canvas>
            </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
import InCanvas from "@/components/DrawCmp/Canvas";
import paper from 'paper'

    export default {
        components: {
            InCanvas,
        },
        data: () => ({
            buttons: ['Simple', 'Separate', 'Replicated'],
            single: true,
            ss: false,
        }),
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