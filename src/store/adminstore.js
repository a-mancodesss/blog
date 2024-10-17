// adminStore.js
import { create } from 'zustand';

const adminStore = create((set) => ({
  isAdmin: false,
  session: false,
}));

export default adminStore;
