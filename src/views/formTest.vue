<template>
  <al-form
    :form-list="saleFormList"
    :form-data="form"
    :form-config="formConfig"
    @buttonClick="buttonClick"
    @change="change"
  />
</template>

<script>
import { formList, saleFormList, formConfig } from './config'
import AlForm from '@/components/form/AlForm.vue'
export default {
  components: {
    AlForm
  },
  data() {
    return {
      formList,
      formConfig,
      saleFormList,
      form: {
        serviceType: '',
        pay_at: []
        agent_state: []
      }
    }
  },
  methods: {
    buttonClick(prop, val) {
      console.log(prop, val)
      // val.cb([
      //   { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
      //   { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' }
      // ]);
    },
    change(prop, val) {
      console.log(prop, val)
    }
  }
}
</script>

<style></style>
