<template>
  <div>
    <!-- <v-container fluid>
      <v-row align="stretch" justify="center">
        <v-col cols="10" sm="6" md="3"> -->
          <v-file-input
          v-model="files"
          accept="image/*"
          color="success"
          counter
          class="caption"
          label="Only image...."
          placeholder="다운로드 폴더 이미지 선택.."
          prepend-icon="mdi-camera"
          outlined
          dense
          :show-size="1000"
          >
          <template v-slot:selection="{ index, text }">
            <v-chip
              v-if="index < 2"
              color="success"
              dark
              label
              small
            >
              {{ text }}
            </v-chip>
              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
              </v-file-input>
              <v-row align="start" justify="end" class="mr-0">
                <v-chip small color="success" @click.prevent="onUpload">
            📺 전송하기
          </v-chip>
                <!-- <v-btn small outlined color="success" @click="onUpload">전송하기</v-btn> -->
              </v-row>

  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        files: [],
        imsi: '',
        filename: '',
        room: '',
        name: ''
      }
    },
    methods: {
     async onUpload() {
       console.log('섹션==',sessionStorage.getItem("name"));
      const fd = new FormData();
      fd.append('test', this.files);

     await axios.post('/paper',fd)
      .then(r=>{
        this.imsi=JSON.stringify(r.data)

        this.filename = this.imsi.replace(/\"/g, "")
        console.log('2',this.filename);

        // this.$store.commit('postSuccess',a)
      })
      .catch(e=>console.error(e.message))

      let name = sessionStorage.getItem("name")
      let filename = this.filename
      console.log('1==',filename)

      let room = sessionStorage.getItem("room")


    await axios.post('/mygabia',{name,filename,room})
      .then(r=>{
        console.log(r);
      })
      .catch(e=>console.error(e.message))

      },

    },
  }
</script>
