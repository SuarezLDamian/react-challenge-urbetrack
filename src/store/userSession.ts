import { create } from "zustand";
import { persist } from "zustand/middleware";

type userSessionState = {
  username: string
  addUserSession: (username: string) => void
  removeUserSession: () => void
}

const useUserSession = create(persist<userSessionState>(
  (set) => ({
    username: "",
    addUserSession: (newUsername: string) => set({ username: newUsername }),
    removeUserSession: () => set({ username: "" })
  }), {
    name: "user-session"
  }
));

export default useUserSession;