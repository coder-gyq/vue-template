<template>
  <div style="width: 100%; height: 100%">
    <div style="display: flex; justify-content: center">
      <el-select
        v-model="selectValue"
        placeholder="Select"
        size="large"
        style="width: 240px"
        @change="languageChange"
      >
        <el-option label="中文" value="zh" />
        <el-option label="English" value="en" />
      </el-select>
    </div>
    <div
      style="
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div>{{ $t("message.hello") }}</div>
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView } from "vue-router";

const { locale } = useI18n();

onMounted(() => {
  selectValue.value = locale.value;
});
const selectValue = ref("");
const languageChange = (value) => {
  locale.value = value;
};
</script>
