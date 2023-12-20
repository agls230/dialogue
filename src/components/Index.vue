<template>
  <van-row>
    <van-col span="12">span: 8</van-col>
    <van-col span="12">span: 8</van-col>
  </van-row>
</template>

<script>
import {modelApi} from "@/api";

export default {
  name: 'Index',
  components: {},
  props: {},
  data() {
    return {
      models: []
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.getModels()
    this.chat()
  },
  methods: {
    getModels() {
      modelApi.getModels().then(({data}) => {
        this.models = data
      }).catch(err => {
        console.log(err)
      })
    },
    chat() {
      const body = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "你好"
          }
        ],
        stream: true
      }
      modelApi.chat(body).then(({data}) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
