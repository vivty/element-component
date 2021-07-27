<template>
  <div class="content">
    <al-form ref="searchForm" v-bind="$attrs" v-on="$listeners" />
    <slot name="append"></slot>
    <page-table ref="searchTable" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import AlForm from '@/components/form/AlForm.vue';
import pageTable from '@/components/table/pageTable.vue';
export default {
  name: 'searchTable',
  components: {
    AlForm,
    pageTable
  },
  props: {},
  created() {
    console.log(this, 'this的数据');
  }
};
</script>

<style></style>
