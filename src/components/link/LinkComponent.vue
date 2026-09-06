<script setup lang="ts">
const { url, linkText } = defineProps({
  url: { type: String, required: true },
  linkText: { type: String, required: true },
})
</script>
<template>
  <div class="linkBox">
    <a v-bind:href="url" class="inner-linkBox">{{ linkText }}</a>
  </div>
</template>
<style>
div.linkBox {
  box-sizing: border-box;
  min-height: 100px;
  background-color: #584f5b;
  position: relative;
  margin: 10px;
}
a.inner-linkBox {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  position: absolute;
  inset: 0;
  font-size: calc(16px + (64 - 16) * ((100vw - 320px) / (3840 - 320)));
}
</style>
