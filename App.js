import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import ListSuperHeroe from './src/component/ListSuperHeroe';
import { PersistGate } from 'redux-persist/lib/integration/react';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<View ><Text>{'Cargando..............'}</Text></View>} persistor={persistor}>
        <View style={styles.container}>
          <ListSuperHeroe></ListSuperHeroe>
        </View>
      </PersistGate>
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
