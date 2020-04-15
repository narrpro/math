import ListView from '@/views/VueStudy/ListView'
import bus from '@/utils/bus.js'

export default function createListView(name){
  return{
    name: name,

    created() {
      bus.$emit('start:spinner')
    this.$store.dispatch('newslist/Fetch_List',this.$route.name)
    .then(()=>{
      bus.$emit('end:spinner')
    })
    .catch((err)=>{
      console.log(err)
    })
    },
    render(createElement){
      return createElement(ListView)
    }
  }
}