import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handleLogin = () => {
    // Lógica de inicio de sesión
    console.log('Iniciar sesión con:', username, password);

    // Navega a la pantalla principal si el inicio de sesión es exitoso
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.decorationSquare}>
        <Text style={styles.titulo}> PARIS 2024 </Text>
      </View>

      <Text style={styles.title}>Inicio de Sesión</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuario:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Ingresa tu usuario"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.cuenta}>O ingresa con</Text>

      <View style={styles.bottomCirclesContainer}>
        <View style={styles.bottomCircle}>
          <Text style={styles.circleText}>F</Text>
        </View>
        <View style={styles.bottomCircle}>
          <Text style={styles.circleText}>G</Text>
        </View>
      </View>

      <Text style={styles.signupText}>
        ¿No tienes una cuenta?{' '}
        <Text style={styles.signupLink}>Regístrate</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  decorationSquare: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '20%', 
    backgroundColor: 'lightblue', 
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  titulo:{
    textAlign:'center',
    fontSize: 50,
    color:'black',
    marginTop: 70,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 16,
    textAlign: 'center',
  },
  signupLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
  cuenta: {
    textAlign: 'center',
    marginTop:16,
  },
  bottomCirclesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 25, 
  },
  bottomCircle: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'lightblue',
    marginHorizontal: 15, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'Blue',
  },
});

export default LoginScreen;
