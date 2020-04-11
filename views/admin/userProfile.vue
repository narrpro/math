<template>
  <div pa-10>
    <h1>내 프로필</h1>
    <h3>나의 등급은{{$store.state.beforelist.claims.level}} 등급입니다. </h3>
  <p></p>
  <p></p>
  <p></p>
   <bars
         :data="[1, 2, 3, 4, 5, 6, 7, 8, 15, 12, 11, 18, 12, 19, 14]"
         :gradient="['#6fa8dc', '#42b983']"
         :barWidth="9"
         :growDuration="1">
       </bars>
  </div>
</template>