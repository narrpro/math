<template>
  <v-card color="transparent" height="500" flat :loading="loading">
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title font-weight-black">로그인</span>
        <v-spacer></v-spacer>
        <span class="caption font-weight-black">
          계정이 없으면&nbsp;
         <v-chip
                  class="ma-2"
                  color="green"
                  dark
                  @click="$emit('changeType')">
                  <v-avatar left class="green darken-4"> 🏒 </v-avatar>
                  회원가입
                  </v-chip>
          <!-- <a @click="$emit('changeType')" class="font-weight-black" color="black">회원가입</a> -->
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="success" block @click="signInWithGoogle">
          <v-icon>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Google 계정으로 로그인
        </v-btn>
      </v-card-actions>
      <v-container fluid>
        <v-row>
          <v-col cols="5">
            <v-divider class="mt-2"></v-divider>
          </v-col>
          <v-col cols="2" class="text-center font-weight-black">
            또는
          </v-col>
          <v-col cols="5">
            <v-divider class="mt-2"></v-divider>
          </v-col>
        </v-row>
      </v-container>
      <v-card-text>
        <v-text-field
          label="이메일"
          v-model="form.email"
          :rules="[rule.required, rule.minLength(7), rule.maxLength(50), rule.email]"
          required
          ></v-text-field>
        <v-text-field
          label="비밀번호"
          v-model="form.password"
          :rules="[rule.required, rule.minLength(6), rule.maxLength(50)]"
          type="password"
          required
          ></v-text-field>
        <div class="recaptcha-terms-text">이 페이지는 reCAPTCHA로 보호되며, Google 개인정보처리방침 및 서비스 약관의 적용을 받습니다.</div>
      </v-card-text>

      <v-card-actions>
        <v-checkbox color="success"
          label="로그인 정보저장"
        ></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn color="success" :disabled="!valid" @click="signInWithEmailAndPassword">
          로그인
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      agree: false,
      rule: {
        required: v => !!v || '필수 항목입니다.',
        minLength: length => v => v.length >= length || `${length}자리 이상으로 입력하세요.`,
        maxLength: length => v => v.length <= length || `${length}자리 이하으로 입력하세요.`,
        email: v => /.+@.+/.test(v) || '이메일 형식에 맞지 않습니다.',
        agree: v => !!v || '약관에 동의해야 진행됩니다.'
      },
      valid: false,
      loading: false
    }
  },
  methods: {
    async signInWithGoogle () {
      this.loading = true
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      try {
        await this.$firebase.auth().signInWithPopup(provider)
        const user = this.$firebase.auth().currentUser
        await user.getIdToken()
        await this.$store.dispatch('getUser', user)
        if (this.$store.state.claims.level === undefined || this.$store.state.claims.level > 1) this.$router.push('/userProfile')
        else this.$router.push('/')
      } catch (e) {
        this.$toasted.global.error(e.message)
      } finally {
        this.loading = false
      }
    },
    async signInWithEmailAndPassword () {
      this.loading = true
      if (!this.$refs.form.validate()) return this.$toasted.global.error('입력 폼을 올바르게 작성해주세요.')
      try {
        await this.$firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        const user = this.$firebase.auth().currentUser
        await user.getIdToken()
        await this.$store.dispatch('getUser', user)
        if (this.$store.state.claims.level === undefined || this.$store.state.claims.level > 1) this.$router.push('/userProfile')
        else this.$router.push('/')
      } catch (e) {
        this.$toasted.global.error(e.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style scoped>
.recaptcha-terms-text {
    font-size: 12px;
    font-weight: 200;
    color: #637282
}
</style>
