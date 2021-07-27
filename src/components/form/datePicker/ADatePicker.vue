<template>
  <el-date-picker v-model="inputModel" v-bind="config" :picker-options="pickOptions" />
</template>

<script>
import { modelMixin } from '@/mixin';
export default {
  name: 'ADatePicker',
  mixins: [modelMixin],
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    pickOptions: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
