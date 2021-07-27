<template>
  <el-time-picker v-model="inputModel" v-bind="config" format="HH:mm:ss" :picker-options="pickOptions" />
</template>

<script>
import { modelMixin } from '@/mixin';
export default {
  name: 'ATimePicker',
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
