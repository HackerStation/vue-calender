<template>
  <div id="app">
    <!-- <CalendarEntry /> -->
    <CalendarWeek />
  </div>
</template>

<script>
// import CalendarEntry from "./sections/CalendarEntry/CalendarEntry";
import CalendarWeek from "./sections/CalendarWeek/CalendarWeek";

export default {
  name: "App",
  components: {
    // CalendarEntry,
    CalendarWeek
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>

<style scoped>
#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
