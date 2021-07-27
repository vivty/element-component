<template>
  <el-radio-group v-model="inputModel" v-bind="config">
    <el-radio 
       v-for="item in options"
        :key="item.value"
       :label="item.label"
       :disabled="item.disabled"
     >
      {{item.label}}
    </el-radio>
  </el-radio-group>
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'ARadioGroup',
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
