<template>
  <el-input 
    v-model="inputModel" 
    v-bind="config"
    @click="handleClick"
    @clear="clear"
    >
    <div slot="increase"></div>
  </el-input>
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'AInput',
  mixins: [modelMixin],
  props: {
     config: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      this.$emit('buttonClick', this.inputModel)
    },
    clear() {
      this.inputModel = ''
    }
  }
}
</script>

<style>

</style>
