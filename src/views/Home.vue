<template>
  <div>
    <div class="topNav">
      <div class="logo"></div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>雏菊UI</h1>
      <h2>一个不一样的 UI 框架</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
.topNav {
  border: 1px solid red;
}
</style>