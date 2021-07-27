<template>
  <div>
    <el-button v-for="(item, index) in buttonList" :key="index" :type="item.type" @click="handleButton(item.prop, row)">
      {{ item.label }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'buttonList',
  props: {
    buttonList: {
      type: Array,
      default: () => []
    },
    row: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleButton(prop, row) {
      this.$emit('buttonClick', prop, row);
    }
  }
};
</script>

<style></style>
