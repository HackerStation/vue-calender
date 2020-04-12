import { seedData } from './seed.js';
export const store = {
  state: {
    seedData
  },
  getActiveDay() {
    return this.state.seedData.filter(day => day.active)[0].fullTitle;
  },
  setActiveDay(id) {
    this.state.seedData.forEach(day => {
      if (day.id === id) {
        day.active = true;
      } else {
        day.active = false;
      }
    });
  },
  setEvent(event) {
    this.state.seedData.forEach(day => {
      if (day.active) {
        day.events.push(event);
      }
    });
  },
  editEvent(id, idx) {
    this.state.seedData.forEach(day => {
      if (day.id === id) {
        day.events[idx].edit = true;
      }
    });
  },
  cancelEditEvent(id, idx) {
    this.state.seedData.forEach(day => {
      if (day.id === id) {
        day.events[idx].edit = false;
      }
    });
  },
  confirmEditEvent(eventDetails, id, idx) {
    this.state.seedData.forEach(day => {
      if (day.id === id) {
        day.events[idx].details = eventDetails;
      }
    });
  },
  deleteEvent(id, idx) {
    this.state.seedData.forEach(day => {
      if (day.id === id) {
        day.events.splice(idx, 1);
      }
    });
  }
};
