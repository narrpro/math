<template>

 <list-item></list-item>

</template>
<script>
import ListItem from '@/components/VueStudy/ListItem.vue'
import bus from '@/utils/bus'
import ListMixin from '@/mixins/ListMixin'
export default {
 components: {
  ListItem
},
  // mounted(){
  //   bus.$emit('end:spinner')
  // }
 mixins: [ListMixin]
}
</script>


// import ListItem from '@/components/VueStudy/ListItem.vue'
// import bus from '@/utils/bus.js'
// export default {
//  components: {
//   ListItem
// },
// created(){
//     bus.$emit('start:spinner')
//     this.$store.dispatch('newslist/Fetch_Ask')
//     .then(()=>{
//       bus.$emit('end:spinner')
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//     },
//   }

