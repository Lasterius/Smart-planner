import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from '../features/burger/model/slice';

const store = configureStore({
  reducer: {
    burger: burgerReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
