<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" v-model.trim="event.details" />
      <p class="calendar-entry-day">
        Day of event:
        <span class="bold">{{ getActiveDay() }}</span>
      </p>
      <a class="button is-primary is-small is-outlined" @click="onEventSubmit">Submit</a>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";

export default {
  name: "CalenderEntry",
  data() {
    return {
      event: {
        details: "",
        edit: false
      }
    };
  },
  methods: {
    getActiveDay() {
      return store.getActiveDay();
    },
    onEventSubmit() {
      if (this.event.details.length !== 0) {
        store.setEvent(this.event);
      } else {
        alert("Please enter event details..");
      }
    }
  }
};
</script>

<style lang='scss' scoped>
#calendar-entry {
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;
      &:focus {
        outline: none;
      }
    }
    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;
      .bold {
        font-weight: 600;
      }
    }
    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>