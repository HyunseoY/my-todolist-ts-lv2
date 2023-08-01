import { combineReducers, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todos from 'redux/modules/todos';

const rootReducer = combineReducers({
  todos,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
