import { v4 as uuid } from 'uuid';

export const itemsFromAPI = [
  { id: uuid(), content: 'Item #1' },
  { id: uuid(), content: 'Item #2' },
  { id: uuid(), content: 'Item #3' },
];

export const listsFromAPI = {
  [uuid()]: {
    name: 'Todo',
    items: itemsFromAPI,
  },
  [uuid()]: {
    name: 'In Progress',
    items: itemsFromAPI,
  },
  [uuid()]: {
    name: 'Done',
    items: itemsFromAPI,
  },
};
