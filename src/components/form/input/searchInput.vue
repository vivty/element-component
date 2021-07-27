<template>
  <div class="query-icon">
    <el-input
      v-model="inputModel"
      v-bind="config"
      icon="search"
      :on-icon-click="handleIconClick"
      class="search-input"
      @keyup.native.enter="eventChange"
    />
    <i class="el-icon-circle-cross close-icon" v-if="inputModel" @click="onClearSearch" title="清空搜索内容"></i>
  </div>
</template>

<script>
import { modelMixin } from '@/mixin';
export default {
  name: 'SearchInput',
  mixins: [modelMixin],
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    clickKey: {
      type: String,
      default: 'inputClick'
    }
  },
  methods: {
    handleIconClick() {
      this.$emit('buttonClick', 'iconClick', this.inputModel);
    },
    eventChange() {
      this.$emit('buttonClick', this.clickKey, this.inputModel);
    },
    onClearSearch() {
      this.inputModel = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.query-icon {
  &:hover .close-icon {
    display: block;
  }
  .close-icon {
    display: none;
    position: absolute;
    top: 0;
    left: 187px;
    line-height: 36px;
    color: #d9e0e8;
    cursor: pointer;
    &:hover {
      color: #c5ced9;
    }
  }
}
</style>
