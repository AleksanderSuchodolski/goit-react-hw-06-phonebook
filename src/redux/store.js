import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { contactsPersistReducer } from './phoneBookSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};
const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  filter: filterSlice.reducer,
});
const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// export const store = configureStore({
//   reducer: {
//     phoneBook: contactsPersistReducer,
//     filter: filterSlice.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export const persistor = persistStore(store);
