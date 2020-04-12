<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column">
          <CalendarWeek />
          <CalendarEntry />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarEntry from "./sections/CalendarEntry/CalendarEntry";
import CalendarWeek from "./sections/CalendarWeek/CalendarWeek";

export default {
  name: "App",
  components: {
    CalendarEntry,
    CalendarWeek
  }
};
</script>

<style>
html,
body {
  height: 100vh;
}
</style>

<style lang='scss' scoped>
#app {
  height: inherit;
  background: #6e6e6e;
  padding-top: 18%;
}
</style>
