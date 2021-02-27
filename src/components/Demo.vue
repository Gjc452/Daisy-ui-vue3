<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-code">
      <pre v-if="codeVisible"
           v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"/>
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="hideCode">隐藏代码</Button>
      <Button v-else @click="showCode">查看代码</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {ref} from 'vue';

const Prism = (window as any).Prism;
export default {
  components: {Button},
  props: {
    component: Object,
  },
  setup() {
    const codeVisible = ref(false);
    const showCode = () => {
      codeVisible.value = true;
    };
    const hideCode = () => {
      codeVisible.value = false;
    };
    return {Prism, showCode, hideCode, codeVisible};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  border-radius: 4px;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    border-top: 1px dashed $border-color;
    background: rgb(250, 250, 250);

    > pre {
      padding: 8px 16px;
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>