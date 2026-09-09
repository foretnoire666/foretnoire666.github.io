<!--<script setup></script>

<template>
  <!-- flexboxにする、レスポンシブも頑張る 
  <div class="mainContents">
    <h1>工事中！</h1>
  </div>
</template> -->
<!-- 一時的にLink.vueの内容使う -->
<script setup lang="ts">
import LinkComponent from '../components/link/LinkComponent.vue'
</script>
<template>
  <LinkComponent url="https://www.pixiv.net/users/168822" linkText="pixiv" />
  <LinkComponent url="https://x.com/foretnoire666" linkText="X(普段のつぶやき)" />
  <LinkComponent
    url="https://x.com/foretnoire644"
    linkText="X(絵または小説のpixivリンクのみ投稿)"
  />
  <a href="https://sites.google.com/view/happy-busy/" class="banner"
    ><img src="../../public/assets/jikanne-.png"
  /></a>
</template>
<style scoped>
a.banner {
  display: flex;
  justify-content: left;
  align-content: center;
  margin: 10px;
}
</style>
