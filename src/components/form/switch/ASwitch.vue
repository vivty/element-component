<template>
  <el-switch
    v-model="inputModel" 
    v-bind="config"
   />
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'ASwitch',
  mixins: [modelMixin],
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
