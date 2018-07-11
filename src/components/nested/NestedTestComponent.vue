<template>
  <div>
    <q-btn>{{ text }}</q-btn>
    <test-side-component></test-side-component>
  </div>
</template>

<script lang="ts">
import { QBtn } from 'quasar';
import TestSideComponent from 'components/TestSideComponent';
import { getString } from 'logic/test-functions';

export default {
  name: 'nested-test-component',
  components: {
    QBtn,
    TestSideComponent,
  },
  computed: {
    text() {
      return `${this.getPrefix()} - ${getString()} - ${this.$store.state.stringFromStore}\``;
    },
  },

  methods: {
    getPrefix(): string {
      return 'Test side component';
    },
  },
};
</script>

<style scoped>

</style>
