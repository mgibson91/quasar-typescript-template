<template>
  <div>
    <q-btn>{{ text }}</q-btn>
    <nested-test-component></nested-test-component>
  </div>
</template>

<script lang="ts">
import NestedTestComponent from 'components/nested/NestedTestComponent';
import { QBtn } from 'quasar';
import { getString } from 'logic/test-functions';

export default {
  name: 'test-component',
  computed: {
    text() {
      return `${this.getPrefix()} - ${getString()} - ${this.$store.state.stringFromStore}`;
    },
  },
  components: {
    NestedTestComponent,
    QBtn,
  },
  methods: {
    getPrefix(): string {
      return 'Test component';
    },
    setMessage(text: string) {
      this.testMessage = text;
    },
  },
  data() {
    return {
      testMessage: '',
    };
  },
};
</script>

<style scoped>

</style>
