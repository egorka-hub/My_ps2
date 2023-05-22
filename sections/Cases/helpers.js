// eslint-disable-next-line import/no-cycle
import { STEP } from './index';

export const getInitialItems = (items) => {
  const arr = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < STEP; i++) {
    if (items[i]) {
      arr.push(items[i]);
    }
  }

  return arr;
};

export const getItemsByFilter = (items = [], categories = []) => items.filter((it) => {
  if (categories.length && !categories.includes('all')) {
    return categories.includes(it.category);
  }
  return true;
});
