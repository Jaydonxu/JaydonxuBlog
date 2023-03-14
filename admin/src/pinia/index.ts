import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({ user: null }),
  actions: {
    setUserInfo(val) {
      this.user = val;
    },
  },
});
