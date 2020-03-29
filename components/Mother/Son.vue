<template>

   <v-form ref="form" lazy-validation>
     <v-card-title primary-title>
       <span class="title">로그인</span>
       <v-spacer></v-spacer>
       <span class="title">
       <a href="">회원가입</a>
       </span>
     </v-card-title>
     <v-card-actions>
       <v-btn color="grey darken-3" block class="text-left">
         <v-icon>mdi-google</v-icon>
         <v-divider vertical class="mx-3" ></v-divider>
         google 계정으로 로그인

       </v-btn>
     </v-card-actions>

          <v-text-field
            color="grey darken-2"
            v-model="email"
            label="Google email을 입력하세요"
          >
          </v-text-field>
          <v-text-field
            color="grey darken-2"
            v-model="password"
            type="password"
            label="Google password를 입력하세요"
          >
          </v-text-field>
   </v-form>

</template>