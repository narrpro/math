<template>
  <h1> {{userInfo.first_name}} 로그인 된 사람 </h1>
</template>

<script>
import { mapState} from "vuex"

export default {
  computed: {
    ...mapState(['userInfo'])
  }

}

</script>