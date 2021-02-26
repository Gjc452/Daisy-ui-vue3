<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button @click="toggle">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre v-if="codeVisible"
           v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"/>
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
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value;
    };
    return {Prism, toggle: toggleCode, codeVisible};
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
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    background: rgb(250, 250, 250);

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>