# super_admin

我们在开发页面的功能的时候，其实主要是表单和表格。但是每次写表单或者表格的时候会发现有很多重复的代码。所以我们可以带着封装的思想来进行封装。里面引入了 element 的组件。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<br/>

> ### **1. 表格组件**

<br/>

- （1）引入表格组件

```
import pageTable from '@/components/table/pageTable.vue';

components: { pageTable }
```

- （2）传入表格的参数和方法

```javascript
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
```

| 参数          |                  含义                  |             默认值              | 数据类型 |
| ------------- | :------------------------------------: | :-----------------------------: | :------: |
| tableData     |               表格的数据               |               []                |  array   |
| tableList     |               表头的数据               |               []                |  array   |
| tableConfig   |             表格的属性配置             |               {}                |  object  |
| page_index    |            分页参数，第一页            |                1                |  number  |
| page_size     |        分页参数，一页多少条数据        |               10                |  number  |
| total         |          分页参数，表格的总数          |                0                |  number  |
| layout        |          分页参数，分页的布局          | sizes, total, prev, pager, next |  string  |
| prevText      |                分页参数                |             上一页              |  string  |
| nextText      |                分页参数                |             下一页              |  string  |
| smallPaginate |     分页参数,是否显示小的分页样式      |              false              | boolean  |
| isPagination  |              是否显示分页              |              true               | boolean  |
| pageSizes     | 分页参数，每页显示个数选择器的选项设置 |      [10, 20, 30, 50, 100]      |  array   |

|        方法         |                     含义                     |               传入的参数               |
| :-----------------: | :------------------------------------------: | :------------------------------------: |
|     tableChange     |   表格组件自带的方法，例如多选，取消选中等   |       方法自带的参数，类型代表        |
|  handleSizeChange   |                   分页方法                   |
| handleCurrentChange |                   分页方法                   |                 页 数                  |
|     buttonClick     | 表格里面若是组件，例如按钮，则按钮点击的方法 | prop(表头的内部值), row(这一行 的数据) |

> ### **2. 表单组件**

<br/>

- （1）引入表格组件

```
import AlForm from '@/components/form/AlForm.vue';

components: { AlForm }
```

- （2）传入表格的参数和方法

```javascript
   <al-form
    :form-list="saleFormList"
    :form-data="form"
    :form-config="formConfig"
    @buttonClick="buttonClick"
    @change="change"
  />
```

|    参数    |      含义      | 默认值 | 数据类型 |
| :--------: | :------------: | :----: | :------: |
| formConfig | 表单的属性配置 |   {}   |  object  |
|  formList  |   表单表单项   |   []   |  array   |
|  formData  |   表单的数据   |   []   |  array   |

|    方法名     |                     含义                     |                方法参数                |
| :-----------: | :------------------------------------------: | :------------------------------------: |
|  buttonClick  | 表格里面若是组件，例如按钮，则按钮点击的方法 | prop(表头的内部值), row(这一行的数据) |
| handleFormBtn |         表格保存按钮和重置按钮的触发         |             prop(按钮类型)             |
