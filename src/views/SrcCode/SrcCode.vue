<template>
    <codemirror v-model="task.srcCode"
                :options="{
                    tabSize: 4,
                    mode: 'text/' + task.lang,
                    lineNumbers: true,
                    line: true,
                    readOnly
                }"></codemirror>
</template>

<script>
  export default {
    name: "SrcCode",
    props: {
      task: {
        type: Object,
        default: () => {}
      },
      readOnly: {
        type: Boolean,
        default: false
      }
    },
  }
</script>
