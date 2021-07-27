<template>
  <el-radio-group v-model="inputModel" v-bind="config">
    <el-radio-button 
       v-for="item in options"
       :key="item.value"
       :label="item.label"
       :disabled="item.disabled"
     >
      {{item.label}}
    </el-radio-button>
  </el-radio-group>
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'ARadioBtn',
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
