import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  login: (token) => {},
  logout: () => {},
  premium: false,
  activatePremium: () => {},
  theme: false,
  setTheme: () => {},
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
    activatePremium(state) {
      state.premium = !state.premium;
    },
    setTheme(state) {
      state.theme = !state.theme;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;
