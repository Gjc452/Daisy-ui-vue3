<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>雏菊UI</h1>
        <h2>一个不一样的 UI 框架</h2>
        <p class="actions">
          <a href="">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <Icon name="light"/>
    <Icon name="ts"/>
    <Icon name="Vue"/>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import Icon from '../lib/Icon.vue';

export default {
  components: {Icon, Topnav}
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      background: $green;
      margin: 0 8px;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>