<template>
  <div class="layout">
    <Topnav :toggle-aside-button-visible="true" class="nav"/>
    <div class="content">
      <aside :class="{asideVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">install</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
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
        </ol>
      </aside>
      <main @click="toggleAside">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = false;
    };
    return {asideVisible, toggleAside};
  }
};
</script>

<style lang="scss" scoped>


.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    display: flex;
    @media (max-width: 500px) {
      padding-left: 0;
    }

    > aside {
      flex-shrink: 0;
      background: white;
      width: 150px;
      padding: 80px 0 16px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 1;
      transition: all 250ms;
      @media (max-width: 500px) {
        transform: translateX(-200px);
        background: rgb(249, 249, 249);
        box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.14);
        &.asideVisible {
          transform: translateX(0);
        }
      }

      > h2 {
        margin: 4px 0;
        padding: 0 16px;
      }

      > ol {
        > li {
          > a {
            font-weight: 400;
            color: rgba(0, 0, 0, 0.7);
            display: block;
            padding: 4px 16px;
            text-decoration: none;
          }

          &:hover {
            color: #409eff;
          }

          .router-link-active {
            color: #409eff;
          }
        }
      }
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }
}

main {
  overflow: auto;
}

</style>