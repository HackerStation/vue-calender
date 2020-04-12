<template>
  <div class="day column" @click="() => setActive(day.id)">
    <div class="day-banner has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <div
        v-for="(event, idx) in day.events"
        :key="idx"
        class="day-event"
        :style="getEventBackgroundColor"
      >
        <div>
          <span class="has-text-centered details">{{ event.details }}</span>
          <div class="has-text-centered icons">
            <i class="fas fa-edit"></i>
            <i class="fa fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../../../store";

export default {
  name: "CalenderDay",
  props: ["day"],
  methods: {
    setActive(id) {
      store.setActive(id);
    }
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
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
  .day-event {
    margin-top: 6px;
    margin-bottom: 6px;
    display: block;
    color: #4c4c4c;
    padding: 5px;
    .details {
      display: block;
    }
    .icons .fa {
      padding: 0 4px;
    }
    input {
      background: none;
      border: 0;
      border-bottom: 1px solid #fff;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
