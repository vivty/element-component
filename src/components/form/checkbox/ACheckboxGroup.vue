<template>
  <el-checkbox-group v-model="inputModel" v-bind="config">
    <el-checkbox 
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :disabled="item.disabled"
    >
     {{item.label}}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'ACheckboxGroup',
  mixins: [modelMixin],
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style>

</style>
