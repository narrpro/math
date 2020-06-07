<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="6"  align="end" justify="center">
          <v-chip small color="success" @click.prevent="reset">
            &#9997; 다시그리기
          </v-chip>
        </v-col>
        <v-col cols="6"  align="start" justify="center">
          <v-chip small color="success" @click.prevent="pngsave">
          💾 저장하기
        </v-chip>
        </v-col>
      </v-row>
    </v-container>
    <div class="mb-2">
    <file-save v-show="ss"></file-save>
    </div>
    <canvas :id ="canvasId" class="canvas-style" v-on:mousedown="mouseDown"></canvas>
  </div>
</template>

<script>
import FileSave from '@/components/DrawCmp/FileSave.vue'
import paper from 'paper'

  export default {
    name: "Canvas",
    components: {
      FileSave,
    },
    props: ['canvasId'],
    data: () => ({
        path: null,
        scope: null,
        ss: false,
    }),
    methods: {
      reset() {
          this.ss = false
          this.scope.project.activeLayer.removeChildren();
      },
      pngsave(){
        setTimeout(()=> {this.ss = true}, 800)
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
          // let self = this;
          this.tool = this.createTool(this.scope);
          this.tool.onMouseDown = (event) => {
              // init path
              this.path = this.pathCreate(this.scope);
              // add point to path
              this.path.add(event.point);
          };
          this.tool.onMouseDrag = (event) => {
              this.path.add(event);
          };
          this.tool.onMouseUp = (event) => {
              // line completed
              this.path.add(event.point);
          }
      }
  },
  mounted() {
      this.scope = new paper.PaperScope();
      this.scope.setup(this.canvasId);
  },
  }
</script>

<style scoped>
 .canvas-style {
        cursor: help;
        width: 100% !important;
        height: 510px !important;
        border: 1px solid green;
        border-radius: 3px;
        display: block;
        margin: auto;
        box-shadow: 0 5px 4px -4px black;
 }
</style>