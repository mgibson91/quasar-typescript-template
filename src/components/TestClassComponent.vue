<template>
  <div>
    <nested-test-component></nested-test-component>
    <p>{{ displayText }}</p>
  </div>
</template>

<script lang="ts">
import NestedTestComponent from 'components/nested/NestedTestComponent';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {
    NestedTestComponent,
  },
})
export default class TestClassComponent extends Vue {
  @Prop(String) text: string

  dataString: string = 'Data string';

  get displayText() {
    return `Computed: |${this.text}|, Data: |${this.dataString}|`;
  }
}
</script>

<style scoped>

</style>
