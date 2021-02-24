<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ul>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ul>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>