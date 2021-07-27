<template>
  <el-select 
    v-model="inputModel" 
    v-bind="config"
    @blur="$emit('blur')"
    @focus="$emit('focus')"
    @clear="clear"
    >
    <span slot="prefix"></span>
    <el-option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      :disabled="item.disabled"
    />
  </el-select>
</template>

<script>
import { modelMixin } from '@/mixin'
export default {
  name: 'ASelect',
  mixins: [modelMixin],
  props: {
    options: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    clear() {
      this.inputModel = ''
    }
  }
}
</script>

<style>

</style>
