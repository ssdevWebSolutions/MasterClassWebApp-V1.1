import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; // <-- This line was missing
import storage from 'redux-persist/lib/storage';
import userRegisterSlice from './redux/userRedux/RegisterSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  user: userRegisterSlice,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer); // <-- fixed here

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
