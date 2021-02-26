<template>
  <h1>Button 示例</h1>
  <div>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
  </div>
</template>


<script lang="ts">
import Demo from './Demo.vue';
import Button1Demo from './Buttom.demo/Button1.demo.vue';
import Button2Demo from './Buttom.demo/Button2.demo.vue';
import Button3Demo from './Buttom.demo/Button3.demo.vue';
import Button4Demo from './Buttom.demo/Button4.demo.vue';
import Button5Demo from './Buttom.demo/Button5.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    };
  }
};
</script>