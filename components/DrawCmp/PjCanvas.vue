<template>
  <div id="rollx">
    <v-container fluid>
        <v-row justify="center">
      <div class="d-flex justify-content-center mt-5" id="p5Canvas"></div>
        </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    mounted () {
      this.$socket.on('pagemove',(data)=>{
      console.log(data.show)
      this.$router.push(data.show).catch(err=>{})
      });

      let socket = this.$socket;
      const script = function(p5) {

        p5.setup = _ => {
           var canvas = p5.createCanvas(350, 500);
            canvas.parent("p5Canvas");
            p5.background(0,128,0);
            socket.on('mouse', (data) =>{
               p5.stroke(255);
              p5.strokeWeight(3);
              p5.line(data.x, data.y, data.px, data.py);
            });
        }

        p5.mouseDragged = _ => {

          p5.stroke(255);
          p5.strokeWeight(3);
          p5.line(p5.mouseX, p5.mouseY ,p5.pmouseX,p5.pmouseY);
          sendmouse(p5.mouseX, p5.mouseY ,p5.pmouseX,p5.pmouseY);
            }
          function sendmouse(x, y, pX, pY) {
            const data = {
              x: x,
              y: y,
              px: pX,
              py: pY,
              room: sessionStorage.getItem('room')
            }
            socket.emit('mouse', data)
          }

      }
      const P5 = this.$p5
      new P5(script)
      }
  }
</script>
<style scoped>
#rollx {
  overscroll-behavior-y: none;
}

</style>