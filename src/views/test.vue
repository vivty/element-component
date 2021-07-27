<template>
  <page-table
    :table-data="data"
    :table-list="tableList"
    :page_size="page_size"
    :page_index="page_index"
    :total="total"
    class="table-content"
    @handleSizeChange="handleSizeChange"
    @handleCurrentChange="handleCurrentChange"
    @buttonClick="buttonClick"
    @tableChange="tableChange"
  />
</template>

<script>
import { tableData, tableList } from './config';
import { modelMixin, paginateMixin } from '@/mixin';
import pageTable from '@/components/table/pageTable.vue';
export default {
  name: 'test',
  mixins: [paginateMixin, modelMixin],
  components: {
    pageTable
  },
  data() {
    return {
      tableData,
      tableList,
      data: []
    };
  },
  created() {
    console.log(this.inputModel, this.modelValue, 'tableList');
    this.total = 654;
  },
  methods: {
    buttonClick(prop, row) {
      console.log(prop, row);
    },
    tableChange(val, type) {
      console.log(val, type);
    }
  }
};
</script>

<style lang="scss" scoped>
.table-content {
  width: 100%;
  /deep/ .el-table__body-wrapper {
    overflow: visible;
  }
  /deep/ .el-table .cell {
    overflow: visible;
  }
  /deep/ .el-table {
    overflow: visible;
  }
  /deep/.el-table__row:last-child .xiaoedian {
    top: -50px;
  }
  /deep/.el-table td.is-left,
  .el-table th.is-left {
    padding-left: 12px;
  }
  /deep/.el-table td.is-right,
  .el-table th.is-right {
    padding-right: 12px;
  }
}
</style>
