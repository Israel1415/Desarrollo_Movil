import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UbicacionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sedes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UbicacionScreen;
