<template>
  <div>
    <graph-input></graph-input>
    <graph-style></graph-style>
  </div>
</template>

<script>
import GraphInput from "@/components/test/GraphInput4.vue";
import GraphStyle from "@/components/test/GraphStyle4.vue";

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

