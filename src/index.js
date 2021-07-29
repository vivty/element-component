import PageTable from '@/components/table/pageTable.vue';
import AlForm from '@/components/form/AlForm.vue';
import SearchTable from '@/components/table/searchTable.vue';
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
import EmptyTable from '@/components/table/emptyTable.vue';

const components = [
  PageTable,
  AlForm,
  SearchTable,
  AInput,
  ASelect,
  AutocompleteInput,
  AInputNumber,
  ACheckboxBtn,
  ACheckboxGroup,
  ACascader,
  ARadioGroup,
  ARadioBtn,
  ASwitch,
  ATimePicker,
  ADatePicker,
  ButtonList,
  EmptyTable,
  SearchInput
];

const install = function (Vue) {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  PageTable,
  AlForm,
  SearchTable,
  AInput,
  ASelect,
  AutocompleteInput,
  AInputNumber,
  ACheckboxBtn,
  ACheckboxGroup,
  ACascader,
  ARadioGroup,
  ARadioBtn,
  ASwitch,
  ATimePicker,
  ADatePicker,
  ButtonList,
  EmptyTable,
  SearchInput
};
