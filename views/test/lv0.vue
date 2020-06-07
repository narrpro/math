<template>
  <div>
    <graph-input></graph-input>
    <graph-style></graph-style>
  </div>
</template>

<script>
import GraphInput from "@/components/test/GraphInputox.vue";
import GraphStyle from "@/components/test/GraphStyleox.vue";
export default {
  components: { GraphInput, GraphStyle },
    mounted () {
      this.$socket.on('pagemove',(data)=>{
      console.log(data.show)
      this.$router.push(data.show).catch(err=>{})
      });
    },
};
</script>

