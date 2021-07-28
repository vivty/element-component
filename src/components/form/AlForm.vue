<template>
  <el-form ref="form" :model="formData" v-bind="formBind" :class="{ inline: formBind.inline }">
    <slot name="prepend" />
    <el-form-item
      v-for="item in itemList"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      v-bind="item.itemConfig"
    >
      <component
        :is="item.component | formComponent"
        ref="formItem"
        v-model="formData[item.prop]"
        v-bind="item.bind"
        @modelChange="$emit('change', item.prop, formData[item.prop])"
        @buttonClick="buttonClick"
      />
    </el-form-item>
    <slot name="append" />
    <el-row v-if="itemBtnList">
      <el-form-item>
        <button-list v-bind="itemBtnList.bind" @buttonClick="handleFormBtn" />
      </el-form-item>
    </el-row>
    <slot name="formEnd" />
  </el-form>
</template>

<script>
import AInput from '@/components/form/input/AInput.vue';
import ASelect from '@/components/form/select/ASelect.vue';
import AutocompleteInput from '@/components/form/input/autocompleteInput.vue';
import AInputNumber from '@/components/form/input/AInputNumber.vue';
import SearchInput from '@/components/form/input/searchInput.vue';
import ACheckboxGroup from '@/components/form/checkbox/ACheckboxGroup.vue';
import ACheckboxBtn from '@/components/form/checkbox/ACheckboxBtn.vue';
import ACascader from '@/components/form/cascader/ACascader.vue';
import ARadioGroup from '@/components/form/radio/ARadioGroup.vue';
import ARadioBtn from '@/components/form/radio/ARadioBtn.vue';
import ASwitch from '@/components/form/switch/ASwitch.vue';
import ATimePicker from '@/components/form/datePicker/ATimePicker.vue';
import ADatePicker from '@/components/form/datePicker/ADatePicker.vue';
import ButtonList from '@/components/button/buttonList.vue';
export default {
  name: 'alForm',
  components: {
    ButtonList
  },
  props: {
    formConfig: {
      type: Object,
      default: () => {}
    },
    formList: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    formComponent(val) {
      const components = {
        input: AInput,
        select: ASelect,
        completeInput: AutocompleteInput,
        searchInput: SearchInput,
        checkGroup: ACheckboxGroup,
        checkBtn: ACheckboxBtn,
        inputNumber: AInputNumber,
        cascade: ACascader,
        radioGroup: ARadioGroup,
        radioBtn: ARadioBtn,
        switch: ASwitch,
        timePicker: ATimePicker,
        datePicker: ADatePicker,
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
    formBind() {
      const defaultFormConfig = {
        labelWidth: '120px',
        size: 'small',

        inline: true
      };
      return {
        ...this.formConfig,
        ...defaultFormConfig
      };
    },
    itemList() {
      return this.formList.filter((item) => {
        if (item.prop !== 'button') {
          return {
            ...item,
            itemConfig: {}
          };
        }
      });
    },
    itemBtnList() {
      return this.formList.find((item) => item.prop === 'button');
    }
  },
  methods: {
    buttonClick(prop, val) {
      this.$emit('buttonClick', prop, val);
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
    handleFormBtn(prop) {
      switch (prop) {
        case 'reset':
          this.resetForm();
          break;
        case 'save':
          this.$refs['form'].validate((valid) => {
            if (valid) {
              return true;
            } else {
              return false;
            }
          });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.inline /deep/ {
  .el-input,
  .el-input__inner,
  .el-textarea__inner {
    width: 240px;
  }
}
.item-block {
  display: block;
}
.block {
  display: block;
  /deep/ .el-form-item__content {
    width: calc(100% - 120px);
  }
  /deep/ {
    .el-input,
    .el-input__inner,
    .el-textarea__inner {
      width: 100%;
    }
  }
}
</style>
