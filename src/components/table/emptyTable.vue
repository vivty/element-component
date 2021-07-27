<template>
  <div>
    <div>{{ emptyText }}</div>
    <!-- <div>
      <img :src="emptyIcon ? emptyIcon : Icon" />
    </div> -->
  </div>
</template>

<script>
import Icon from '@/assets/noData.png';
export default {
  name: 'emptyTable',
  props: {
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    emptyIcon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      Icon
    };
  }
};
</script>
