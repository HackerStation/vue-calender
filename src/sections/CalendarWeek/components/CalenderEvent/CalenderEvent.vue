<template>
  <div>
    <div
      v-for="(event, idx) in events"
      :key="idx"
      class="day-event"
      :style="getEventBackgroundColor"
    >
      <div v-if="!event.edit">
        <span class="has-text-centered details">{{ event.details }}</span>
        <div class="has-text-centered icons">
          <i class="fas fa-edit" @click="onEditEvent(dayId, idx)"></i>
          <i class="fa fa-trash" @click="onDeleteEvent(dayId, idx)"></i>
        </div>
      </div>
      <div v-if="event.edit">
        <input type="text" :placeholder="event.details" v-model.trim="event.details" />
        <div class="has-text-centered icons">
          <i class="fa fa-check" @click="onEventSubmit(dayId, idx)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../../../store";

export default {
  name: "CalenderEvent",
  props: ["events", "dayId"],
  data() {
    return {
      event: {
        details: ""
      }
    };
  },
  methods: {
    onEditEvent(id, index) {
      store.editEvent(id, index);
    },
    onEventSubmit(id, index) {
      if (this.event.details.length !== 0) {
        store.setEvent(this.event.details, id, index);
      } else {
        store.cancelEditEvent(id, index);
      }
    },
    onDeleteEvent(id, index) {
      store.deleteEvent(id, index);
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
</style>

