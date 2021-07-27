<template>
  <div class="pay-money">
    <span class="money">
      {{ this.row.sell_price / 100 }}
      <i v-if="this.row.favour_price > 0" class="el-icon-caret-bottom more-icon"></i>
    </span>
    <div v-if="this.row.favour_price > 0" class="xiaoedian">小鹅点抵扣：{{ this.row.favour_price / 100 }}点</div>
  </div>
</template>

<script>
export default {
  name: 'SellPrice',
  props: {
    row: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    console.log(this.row, '7899789');
  }
};
</script>

<style lang="scss" scoped>
.pay-money {
  position: relative;
  &:hover {
    .xiaoedian {
      display: block;
    }
  }
  .xiaoedian {
    display: none;
    position: absolute;
    left: 50%;
    top: 30px;
    width: 180px;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
  .more-icon {
    color: #e7e7e7;
    margin: 0 0 0 4px;
  }
}
</style>
