<template>
  <div>
      <v-container fluid>
        <v-row justify="center">
            <v-btn class="ma-2" tile outlined color="black" @click.prevent="reset">
              <v-icon left>delete_forever</v-icon>
              Clear</v-btn>
            <v-btn id="download-to-svg" class="ma-2" tile outlined color="black" @click.prevent="pngsave">
              <v-icon left>save</v-icon>
              Save</v-btn>
        </v-row>
      </v-container>
    <canvas :id ="canvasId2" class="canvas-style" v-on:mousedown="mouseDown"></canvas>
  </div>
</template>

<script>
import paper from 'paper'
  export default {
    name: "Canvas",
        props: ['canvasId2'],
        data: () => ({
            path: null,
            scope: null
        }),
        created () {
            this.$socket.disconnect();
        },
        methods: {
            reset() {
                this.scope.project.activeLayer.removeChildren();
            },
            pngsave() {

              var fileName = "test.svg"
              var url = "data:image/svg+xml;utf8," + encodeURIComponent(this.scope.project.exportSVG({asString:true}));
              var link = document.createElement("a");
              link.download = fileName;
              link.href = url;
              link.click();
              },

            pathCreate(scope) {
                scope.activate();
                return new paper.Path({
                    strokeColor: "#000000",
                    strokeJoin: 'round',
                    strokeWidth: 2
                })
            },
            createTool(scope) {
                scope.activate();
                return new paper.Tool();
            },
            mouseDown() {
                // in order to access functions in nested tool
                let self = this;
                // create drawing tool
                this.tool = this.createTool(this.scope);
                this.tool.onMouseDown = (event) => {
                    // init path
                    self.path = self.pathCreate(self.scope);
                    // add point to path
                    self.path.add(event.point);
                };
                this.tool.onMouseDrag = (event) => {
                    self.path.add(event);
                };
                this.tool.onMouseUp = (event) => {
                    // line completed
                    self.path.add(event.point);
                }
            }
        },
        mounted() {
            this.scope = new paper.PaperScope();
            this.scope.setup(this.canvasId);
        }
  }
</script>

<style scoped>
 .canvas-style {
        cursor: help;
        width: 360px;
        height: 500px;
        border: 1px solid green;
        border-radius: 3px;
        display: block;
        margin: auto;
        box-shadow: 0 5px 4px -4px black;
 }
</style>