<template>
  <search-table
    :form-list="saleFormList"
    :form-data="form"
    :table-data="tableData"
    :table-list="tableList"
    :page_size="page_size"
    :page_index="page_index"
    :total="total"
    @handleSizeChange="handleSizeChange"
    @handleCurrentChange="handleCurrentChange"
    @buttonClick="buttonClick"
    @tableChange="tableChange"
    @change="change"
  />
</template>

<script>
import { saleFormList, formConfig, tableData, tableList } from './config';
import { modelMixin, paginateMixin } from '@/mixin';
import searchTable from '@/components/table/searchTable.vue';
export default {
  name: 'salePage',
  mixins: [paginateMixin, modelMixin],
  components: {
    searchTable
  },
  data() {
    return {
      saleFormList,
      formConfig,
      tableData,
      tableList,
      form: {}
    };
  },
  methods: {
    buttonClick(prop, row) {
      console.log(prop, row);
    },
    tableChange(val, type) {
      console.log(val, type);
    },
    change(prop, val) {
      console.log(prop, val);
    }
  }
};
</script>

<style></style>
