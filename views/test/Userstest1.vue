<template>
  <div>
    <h1> Users 하위 자식 콤포넌트</h1>
    검색 번호 : {{userId}}
  </div>
</template>

<script>
export default {
  computed:{
    userId(){
      return this.$route.params.id
    }
  }
}
</script>