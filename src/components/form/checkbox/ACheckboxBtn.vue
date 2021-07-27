<template>
  <el-checkbox-group v-model="inputModel" v-bind="config">
    <el-checkbox-button
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :disabled="item.disabled"
    >
     {{item.label}}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'ACheckboxBtn',
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
