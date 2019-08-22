import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor, rrfProps } from './src/redux/store';
import Main from './src/component/Main';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <PersistGate loading={<View ><Text>{'Cargando..............'}</Text></View>} persistor={persistor}>
            <View style={styles.container}>
              <Main></Main>
            </View>
          </PersistGate>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
