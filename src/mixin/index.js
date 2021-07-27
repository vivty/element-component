var modelMixin = {
  model: {
    prop: 'modelValue',
    event: 'modelChange'
  },
  props: {
    modelValue: {
      default: ''
    }
  },
  computed: {
    inputModel: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.modelChange(val);
      }
    }
  },
  methods: {
    modelChange(val) {
      this.$emit('modelChange', val);
    }
  }
};

var paginateMixin = {
  data() {
    return {
      page_size: 10,
      page_index: 1,
      total: 0
    };
  },
  methods: {
    handleSizeChange(size) {
      this.page_index = 1;
      this.page_size = size;
      this.getList();
    },
    handleCurrentChange(index) {
      this.page_index = index;
      this.getList();
    }
  }
};

export { modelMixin, paginateMixin };
