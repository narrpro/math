<template>
 <v-container grid-list-xl text-xs-center fluid>
    <v-layout row wrap >
        <v-flex v-for="i in 5" :key="`6${i}`" xs6 sm4 md2
      justify-center
      align-center
      >
			<drag class="drag"
        :transfer-data="{ example: num[i-1] }"
				:effect-allowed="['copy']"
				drop-effect="copy"
			>
      <p class="display-1" text-center>{{i}}번
        </p>
      </drag>
      </v-flex>
    </v-layout>
		<div>
			<drop class="drop"
				:class="{ over }"
				@dragover="over = true"
				@dragleave="over = false"
				@drop="handleDrop">
        제출
			</drop>
		</div>
  </v-container>

</template>

<script>
import {Drag, Drop} from 'vue-drag-drop'
	export default {
		components: {Drag, Drop},

		data() {
      return {
        over: false,
        num: ['one','two','three','four','five']
      };
		},
		methods: {
			handleDrop(data) {
				this.over = false;
				alert(`선택한 번호: ${JSON.stringify(data.example)}`);
			},
		},
	};
</script>

<style scoped>
.drag {
		box-sizing: border-box;
		/* display: inline-block; */
		border-radius: 60px;
		width: 120px;
		height: 120px;
		/* background: white; */
		vertical-align: middle;
		margin:0 auto;
		/* position: relative; */
		/* padding: 5px; */
		/* padding-top: 35px; */
		text-align: center;
    justify-content: center;
    display: table-cell;
		/* margin: 10px; */
	}
.drop {
		box-sizing: border-box;
		display: block;
		border-radius: 80px;
		width: 160px;
		height:160px;
		/* background: grey lighten-2; */
		/* margin-right: 20px; */
		position: relative;
		/* padding: 5px;
		padding-top: 35px; */
		text-align: center;
		margin:0 auto;
    color: #fff;
	}
	.drag {
		color: #fff;
		cursor: copy;
		background: green;
		/* border-right: 2px solid green; */
		/* border-bottom: 2px solid green; */
	}
	.drop {
		background: grey;
		border-top: 2px solid black;
		border-left: 2px solid black;
	}
	.drop.over {
		/* border-color: orange; */
		background: orange;
	}
  	/* .section {
		margin-top: 30px;
		margin-bottom: 50px;
	} */
</style>