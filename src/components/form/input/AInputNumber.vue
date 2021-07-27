<template>
  <el-input-number 
    v-model="inputModel" 
    v-bind="config"
  />
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'AInputNumber',
  mixins: [modelMixin],
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
