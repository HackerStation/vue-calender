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
  getActiveDay() {
    return this.state.seedData.filter(day => day.active)[0].fullTitle;
  }
};
