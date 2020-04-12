<template>
  <div id="calendar-week">
    <!-- Markup for calendar week -->
    <div class="columns is-mobile">
      <CalendarDay v-for="day in sharedState.seedData" :key="day.id" :day="day" />
    </div>
  </div>
</template>
<script>
import { store } from "../../store";
import CalendarDay from "./components/CalendarDay/CalendarDay";

export default {
  name: "CalendarWeek",
  data() {
    return {
      sharedState: store.state
    };
  },
  components: {
    CalendarDay
  }
};
</script>
<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .columns {
    padding: 0 0 0 0;
  }
}
</style>