<template>
  <el-autocomplete
      class="inline-input"
      v-model="inputModel"
      :fetch-suggestions="querySearch"
      v-bind="config"
      @select="handleSelect"
    ></el-autocomplete>
</template>

<script>
import { modelMixin } from '@/mixin';
export default {
  name: 'autocompleteInput',
  mixins: [modelMixin],
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    querySearch(queryString, cb) {
      this.$emit('buttonClick', 'queryInput', {queryString, cb})
    },
    handleSelect(val){
       this.$emit('modelChange', val.value)
    }
  }
}
</script>

<style>

</style>
