import {AsyncStorage} from "react-native";
import {applyMiddleware, compose, createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";

import reducers from "../reducers";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["form"],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
}
