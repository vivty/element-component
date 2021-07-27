<template>
  <el-cascader
    v-model="inputModel"
    v-bind="config"
    :options="options"
    :props="caderProps"
  ></el-cascader>
</template>

<script>
import { modelMixin } from '@/mixin'
export default { 
  name: 'ACascader',
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
    caderProps: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
