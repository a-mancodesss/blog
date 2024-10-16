// adminStore.js
import { create } from 'zustand';

const adminStore = create((set) => ({
  isAdmin: true,
  session: true,
}));

export default adminStore;
