import { create } from 'zustand';

interface UserState {
  user: { email: string; name?: string; profilePicture?: string; password?: string } | null;
  setUser: (user: { email: string; name?: string; profilePicture?: string; password?: string }) => void;
  clearUser: () => void;
}


const useUserStore = create<UserState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  clearUser: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));

export default useUserStore;
