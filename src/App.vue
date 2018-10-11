<template>
  <div id="q-app">
    <!-- main wrapping component -->
    <q-layout id="mainLayout">

      <!-- optional -->
      <q-layout-header>
        <!-- content; any -->
      </q-layout-header>

      <!-- optional -->
      <q-layout-drawer side="left">
        <!-- content; any -->
      </q-layout-drawer>

      <!-- optional -->
      <q-layout-drawer side="right">
        <!-- content; any -->
      </q-layout-drawer>

      <!-- REQUIRED -->
      <q-page-container id="pageContainer">
        <!--
          Here it's where Vue Router injects children
          Page components.

          <router-view/> tag below can be replaced by an
          actual page content should you wish to do so.
        -->
        <router-view/>
        <!--
          First child of QPageContainer must be a QPage,
          so make sure that your layout route children components
          encapsulate a QPage.
        -->

      </q-page-container>

      <!-- optional -->
      <q-layout-footer>
        <!-- content; any -->
      </q-layout-footer>
    </q-layout>
  </div>
</template>

<script lang="ts">
import {
  QLayout,
  QLayoutHeader,
  QLayoutFooter,
  QLayoutDrawer,
  QPageContainer,
  QPage,
} from 'quasar';

import store from 'src/store'

store.dispatch('general/updateTasks');

export default {
  name: 'App',
  store,
  components: {
    QLayout,
    QLayoutHeader,
    QLayoutFooter,
    QLayoutDrawer,
    QPageContainer,
    QPage,
  },
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

<style lang="stylus">
  #q-app
    display flex
    height 100%
    width 100%

  #pageContainer > .q-layout
    display flex

    > .q-layout-page-container
      flex 1 1 auto

  #mainLayout
    overflow hidden
</style>
