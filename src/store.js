import { seedData } from './seed.js';
export const store = {
  state: {
    seedData
  },
  setActive(id) {
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
  getActiveDay() {
    return this.state.seedData.filter(day => day.active)[0].fullTitle;
  }
};
