<template>
  <q-btn>{{ text }}</q-btn>
</template>

<script lang="ts">
import { QBtn } from 'quasar';
import { getString } from 'logic/test-functions';

export default {
  name: 'test-side-component',
  components: { QBtn },

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
