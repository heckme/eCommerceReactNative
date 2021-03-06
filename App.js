import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import React from "react";
import SplashScreen from "react-native-splash-screen";

import Main from "./src/Main";
import store from "./src/config/store";


const persist = store();

const App = () => {
  // SplashScreen.show();
  return (
      <Provider store={persist.store}>
          <PersistGate loading={null} persistor={persist.persistor}>
              <Main />
          </PersistGate>
      </Provider>
  );
};


export {
  App,
  persist
};
