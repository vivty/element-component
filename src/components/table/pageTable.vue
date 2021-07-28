<template>
  <div class="content">
    <el-table
      ref="pageTable"
      :data="tableData"
      v-bind="config"
      @select="tableChange($event, 'select')"
      @select-all="tableChange($event, 'selectAll')"
      @selection-change="tableChange($event, 'selectChange')"
      @clearSelection="tableChange($event, 'clearSelect')"
      @sort-change="tableChange($event, 'sort')"
      class="page-table"
    >
      <slot name="front"></slot>
      <el-table-column
        v-for="item in tableSelect"
        :key="item.type"
        type="selection"
        :width="item.width"
        v-bind="item"
      />
      <el-table-column v-for="item in tableIndex" :key="item.type" type="index" :width="item.width" v-bind="item" />
      <el-table-column v-for="item in tableColumn" :key="item.type || item.prop" v-bind="item">
        <template slot-scope="scope">
          <component
            :is="item.component | tableComponent"
            v-if="item.component"
            v-model="scope.row[item.prop]"
            v-bind="item.bind"
            :row="scope.row"
            @modelChange="$emit('change', item.prop, scope.row[item.prop], scope.row)"
            @buttonClick="buttonClick"
          />
          <span v-else>{{ scope.row[item.prop] ? scope.row[item.prop] : '--' }}</span>
        </template>
      </el-table-column>
      <slot name="behind"></slot>
      <template slot="empty">
        <empty-table />
      </template>
    </el-table>
    <el-pagination
      ref="pagination"
      v-if="isPagination"
      class="page-pagination"
      :layout="layout"
      :small="smallPaginate"
      :current-page="page_index"
      :page-size="page_size"
      :page-sizes="pageSizes"
      :total="total"
      :prev-text="prevText"
      :next-text="nextText"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import EmptyTable from '@/components/table/emptyTable.vue';
import ButtonList from '@/components/button/buttonList.vue';

export default {
  name: 'test',
  components: {
    EmptyTable,
    ButtonList
  },
  props: {
    // 分页的参数layout, page_size, page_index, total, prevText, nextText, smallPaginate
    layout: {
      type: String,
      default: 'sizes, total, prev, pager, next'
    },
    page_size: {
      type: Number,
      default: 10
    },
    page_index: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    prevText: {
      type: String,
      default: '上一页'
    },
    nextText: {
      type: String,
      default: '下一页'
    },
    smallPaginate: {
      type: Boolean,
      default: false
    },
    isPagination: {
      type: Boolean,
      default: true
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 50, 100];
      }
    },
    // 表格的参数
    tableList: {
      type: Array,
      default: () => []
    },
    tableConfig: {
      type: Object,
      default: () => {}
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    tableComponent(val) {
      const components = {
        button: ButtonList
      };
      if (typeof val === 'string') {
        return components[val];
      } else {
        return val;
      }
    }
  },
  computed: {
    config() {
      return {
        border: true,
        size: 'medium',
        ...this.tableConfig
      };
    },
    columnList() {
      return this.tableList.map((item) => {
        return {
          align: 'center',
          ...item
        };
      });
    },
    tableSelect() {
      return this.columnList.filter((item) => item.type === 'select');
    },
    tableIndex() {
      return this.columnList.filter((item) => item.type === 'index');
    },
    tableColumn() {
      return this.columnList.filter((item) => item.prop);
    }
  },
  methods: {
    tableChange({ ...val }, type) {
      this.$emit('tableChange', { ...val }, type);
    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val);
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val);
    },
    buttonClick(prop, row) {
      this.$emit('buttonClick', prop, row);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  /deep/ .el-table {
    max-width: 100%;
    background-color: #fff;
    border: 1px solid #dfe6ec;
    font-size: 14px;
    th > .cell {
      line-height: 30px;
      padding: 0 5px;
    }
    /deep/ .el-table--small td,
    .el-table--small th {
      padding: 0 !important;
      height: 40px;
    }
    td,
    th {
      height: 40px;
      padding: 0;
      min-width: 0;
    }
    th {
      background-color: #eef1f6;
      border-bottom: 1px solid #dfe6ec;
      .is-leaf {
        border-bottom: 1px solid #dfe6ec;
      }
    }
    thead {
      color: #1f2d3d;
    }
  }
  .page-pagination {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
}
</style>
