import { requiredRule, SearchItem } from '@/utils/tool';
import SellPrice from './sellPrice.vue';

// const buttonList = [
//   { prop: 'edit', label: '编辑', type: 'text' },
//   { prop: 'del', label: '删除', type: 'text' }
// ];
const buttonFormList = [
  { prop: 'cancel', label: '取消' },
  { prop: 'save', label: '保存', type: 'primary' }
];

const tableList = [
  { prop: 'phone', label: '客户账号' },
  { prop: 'clue_type', label: '商机来源' },
  { prop: 'pay_time', label: '支付时间', sortable: true },
  { prop: 'goods_name', label: '购买服务' },
  { prop: 'pay_state', label: '购买类型' },
  { prop: 'service_name', label: '服务类型' },
  { prop: 'shop_name', label: '归属店铺' },
  { prop: 'sell_price', label: '实付金额', component: SellPrice, sortable: true },
  { prop: 'agent_name', label: '所属代理商' },
  { prop: 'manager_name', label: '渠道经理' },
  { prop: 'city_name', label: '代理区域' },
  { prop: 'state_name', label: '合同状态' },
  { prop: 'active_state_name', label: '活跃状态' },
  {
    prop: 'button',
    label: '操作',
    width: 100,
    fixed: 'right',
    component: 'button',
    bind: { buttonList: [{ prop: 'detail', label: '详情', type: 'text' }] }
  }
];

// const tableDataFn = (name, age, city) => {
//   return { name, age, city };
// };
// const tableData = [
//   tableDataFn('小明', '44', '长沙'),
//   tableDataFn('小拜', '14', '深圳'),
//   tableDataFn('小红', '24', '苏州')
// ];
const tableConfig = {};
const selectValue = [
  { value: '1', label: '数据1' },
  { value: '2', label: '数据2' },
  { value: '3', label: '数据3' },
  { value: '4', label: '数据4' }
];
const checkValue = [
  { value: 'hengyang', label: '衡阳' },
  { value: '2', label: '长沙' },
  { value: '3', label: '深圳', disabled: true }
];
const cascadeList = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          {
            value: 'yizhi',
            label: '一致'
          },
          {
            value: 'fankui',
            label: '反馈'
          },
          {
            value: 'xiaolv',
            label: '效率'
          },
          {
            value: 'kekong',
            label: '可控'
          }
        ]
      },
      {
        value: 'daohang',
        label: '导航',
        children: [
          {
            value: 'cexiangdaohang',
            label: '侧向导航'
          },
          {
            value: 'dingbudaohang',
            label: '顶部导航'
          }
        ]
      }
    ]
  }
];
const formList = [
  { prop: 'name', label: '活动名称', component: 'input', bind: { config: { clearable: true } } },
  {
    prop: 'date',
    label: '日期选择器',
    component: 'datePicker',
    bind: {
      config: {
        type: 'datetimerange',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        pickOptions: {
          shortcuts: [
            {
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }
          ]
        },
        clearable: true
      }
    }
  },
  {
    prop: 'testSelect',
    label: '下拉框',
    component: 'select',
    bind: { options: selectValue, config: { multiple: true } }
  },
  { prop: 'complete', label: '输入建议', component: 'completeInput', bind: {} },
  { prop: 'searchInput', label: 'icon搜索', component: 'searchInput', bind: {} },
  { prop: 'search', label: 'icon', component: 'searchInput', bind: {} },
  { prop: 'searchInput1', label: '搜索', component: 'searchInput', bind: {}, itemConfig: { class: 'block' } },
  { prop: 'checkGroup', label: '多选', component: 'checkGroup', bind: { options: checkValue } },
  { prop: 'checkBtn', label: '按钮多选', component: 'checkBtn', bind: { options: checkValue } },
  { prop: 'inputNumber', label: '计数器', component: 'inputNumber', bind: { config: { max: 10, step: 2 } } },
  {
    prop: 'cascade',
    label: '多级下拉选择',
    component: 'cascade',
    bind: {
      options: cascadeList,
      config: { placeholder: '请选择' },
      caderProps: {
        multiple: true,
        lazy: true,
        lazyLoad: function (node, resolve) {
          const { level } = node;
          var id = 0;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(() => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        }
      }
    }
  },
  { prop: 'radioGroup', label: '单选', component: 'radioGroup', bind: { options: checkValue } },
  { prop: 'radioBtn', label: '单选按钮', component: 'radioBtn', bind: { options: checkValue } },
  {
    prop: 'ASwitch',
    label: '开关',
    component: 'switch',
    bind: { config: { activeText: '按月付费', inactiveText: '按年付费' } }
  },
  {
    prop: 'time',
    label: '时间选择器',
    component: 'timePicker',
    bind: { pickOptions: { selectableRange: '18:30:00 - 20:30:00' }, clearable: true }
  },
  { prop: 'button', label: '操作按钮', component: 'button', bind: { buttonList: buttonFormList } }
];

const formConfig = {
  labelWidth: '120px',
  rules: {
    name: requiredRule('活动名称'),
    testSelect: requiredRule('请选择下拉框')
  }
};

const tableData = [
  {
    active_state_name: '待清退（清退审批中）',
    agent_name: '926创建的新增公司流程线下的内容',
    city_name: '珠海市',
    clue_type: '自拓',
    dls_id: 'DLS_5f6eb05ce158a_r7KH64eQ',
    favour_price: 98530,
    goods_name: '积分商城',
    id: 2734996,
    is_first_pay: 0,
    manager_id: 3,
    manager_name: 'jason',
    pay_state: '首开',
    pay_time: '2021-07-02 16:56',
    phone: '13663957276',
    sell_price: 0,
    service_name: '',
    shop_name: '功能包时长走查正式版店铺',
    state_name: '已到期'
  },
  {
    active_state_name: '待清退（清退审批中）',
    agent_name: '926创建的新增公司流程线下的内容',
    city_name: '珠海市',
    clue_type: '自拓',
    dls_id: 'DLS_5f6eb05ce158a_r7KH64eQ',
    favour_price: 98530,
    goods_name: '电子书',
    id: 2734996,
    is_first_pay: 0,
    manager_id: 3,
    manager_name: 'jason',
    pay_state: '首开',
    pay_time: '2021-07-02 15:46',
    phone: '13663957276',
    sell_price: 0,
    service_name: '',
    shop_name: '功能包时长走查正式版店铺',
    state_name: '已到期'
  },
  {
    active_state_name: '待清退（清退审批中）',
    agent_name: '926创建的新增公司流程线下的内容',
    city_name: '珠海市',
    clue_type: '自拓',
    dls_id: 'DLS_5f6eb05ce158a_r7KH64eQ',
    favour_price: 38694,
    goods_name: '随堂检测',
    id: 2734996,
    is_first_pay: 0,
    manager_id: 3,
    manager_name: 'jason',
    pay_state: '首开',
    pay_time: '2021-07-02 14:40',
    phone: '13663957276',
    sell_price: 0,
    service_name: '',
    shop_name: '功能包时长走查正式版店铺',
    state_name: '已到期'
  }
];

const clueTypeList = [
  { value: 1, label: '小鹅通分配' },
  { value: 2, label: '自拓' }
];
const payStateList = [
  { value: 0, label: '首次购买' },
  { value: 1, label: '续费' }
];
const serviceTypeList = [
  { value: 1, label: '新教育旗舰版' },
  { value: 2, label: '新教育专业版' },
  { value: 3, label: '新教育标准版' },
  { value: 4, label: '企学院服务' }
];
const pickOptions = {
  shortcuts: [
    {
      text: '最近一周',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '最近一年',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
        picker.$emit('pick', [start, end]);
      }
    }
  ]
};
const collaborateStateOptions = [
  { value: 1, label: '未到期' },
  { value: 3, label: '已清退' },
  { value: 6, label: '已到期' },
  { value: 4, label: '已删除' }
];
const activeOptions = [
  { value: '1', label: '合作中' },
  { value: '2', label: '待激活' },
  { value: '3', label: '待清退(清退审批中)' },
  { value: '7', label: '待清退(待签清退协议)' },
  { value: '4', label: '待清退(已签清退协议)' },
  { value: '5', label: '提前清退' },
  { value: '6', label: '到期清退' }
];
const saleFormList = [
  SearchItem('search', '代理商搜索', 'searchInput', { config: { placeholder: '客户账号/代理商' }, clickKey: 'enter' }),
  SearchItem('clue_type', '商机来源', 'select', {
    options: clueTypeList,
    config: { placeholder: '商机来源', clearable: true }
  }),
  SearchItem('pay_state', '购买类型', 'select', {
    options: payStateList,
    config: { placeholder: '购买类型', clearable: true }
  }),
  SearchItem('serviceType', '服务类型', 'select', {
    options: serviceTypeList,
    config: { placeholder: '服务类型', clearable: true }
  }),
  SearchItem('pay_at', '支付时间', 'datePicker', {
    config: { placeholder: '全部', type: 'daterange' },
    pickOptions: pickOptions
  }),
  SearchItem('is_ka', 'KA大客户', 'select', {
    options: [
      { value: '1', label: '是' },
      { value: '2', label: '否' }
    ],
    config: { placeholder: 'KA大客户', clearable: true }
  }),
  SearchItem('agent_state', '合同状态', 'select', {
    options: collaborateStateOptions,
    config: { placeholder: '合同状态', clearable: true, multiple: true }
  }),
  SearchItem('active_state', '活跃状态', 'select', {
    options: activeOptions,
    config: { placeholder: '活跃状态', clearable: true, multiple: true }
  }),
  SearchItem('button', '操作按钮', 'button', {
    buttonList: [
      { prop: 'search', label: '筛选', type: 'primary' },
      { prop: 'reset', label: '重置筛选条件', type: 'text' },
      { prop: 'download', label: '导出' }
    ]
  })
];
export { tableList, tableData, tableConfig, formList, formConfig, saleFormList };
