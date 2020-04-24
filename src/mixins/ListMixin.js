import bus from '@/utils/bus'

export default {
  mounted(){
    bus.$emit('end:spinner')
  }
  // created() {
  //   bus.$emit('start:spinner')
  // this.$store.dispatch('newslist/Fetch_List',this.$route.name)
  // .then(()=>{
  //   bus.$emit('end:spinner')
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
  // },
  // components: {
  // },
};