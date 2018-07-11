<template>
  <div id="q-app">
    <test-component></test-component>
    <test-class-component text=1></test-class-component>
  </div>
</template>

<script lang="ts">
import TestComponent from 'components/TestComponent';
import TestClassComponent from 'components/TestClassComponent';

export default {
  components: { TestComponent, TestClassComponent },
  name: 'App',
  methods: {
    getString(): string {
      return 'test';
    },
  },
  mounted() {
    console.log(this.getString());
  },
};
</script>

<style>
</style>
