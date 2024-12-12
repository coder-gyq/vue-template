<template>
  <div>
    <span style="display: block">{{ c }}</span>
    <el-button @click="one">一倍</el-button>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const c = computed(() => {
  return store.count;
});
const one = () => {
  store.increment();
};
</script>
<style lang="less">
.cla {
  div {
    color: red;
  }
}
</style>
