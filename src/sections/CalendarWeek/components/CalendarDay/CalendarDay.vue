<template>
  <div class="day column" @click="() => setActiveDay(day.id)">
    <div class="day-banner has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <CalendarEvent :events="day.events" :dayId="day.id" />
    </div>
  </div>
</template>

<script>
import CalendarEvent from "../CalenderEvent/CalenderEvent";
import { store } from "../../../../store";

export default {
  name: "CalenderDay",
  props: ["day"],
  components: {
    CalendarEvent
  },
  methods: {
    setActiveDay(id) {
      store.setActiveDay(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.day {
  background-color: #4a4a4a;
  color: #fff;
  border-left: 1px solid #8f8f8f;
  border-bottom: 1px solid #8f8f8f;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background: darken(#4a4a4a, 3%);
  }
  .day-banner {
    background-color: #333333;
    color: #fff;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
  }
  .day-details {
    padding: 10px;
  }
  &:last-child {
    border-right: 1px solid #8f8f8f;
  }
}
</style>
