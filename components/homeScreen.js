import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Dimensions, SafeAreaView, StatusBar, Animated, TextInput } from 'react-native';

const carruselImagenes = [
  require("../assets/paris1.jpg"),
  require("../assets/paris2.jpg"),
  require("../assets/paris3.jpeg"),
  require("../assets/paris4.jpg"),
];

const width = Dimensions.get("window").width;
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO = 2;
const ANCHO_RECUADRO = (width - 6 * ESPACIO) / 2; // Calculamos el ancho del recuadro de texto
const ALTO_RECUADRO = ANCHO_RECUADRO * 0.5; // Proporcionalmente ajustamos el alto

const HomeScreen = () => {
  const scrollX = useRef(new Animated.Value(ANCHO_CONTENEDOR)).current;
  const flatListRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      flatListRef.current.scrollToOffset({
        offset: scrollX._value + ANCHO_CONTENEDOR,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [scrollX]);

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: false,
  });

  // Define los elementos de texto como recuadros
  const textBlocks = [
    "Los Juegos Olímpicos de París 2024, oficialmente conocidos como los Juegos de la XXXIII Olimpiada, está previsto que sean un evento multideportivo internacional que se llevará a cabo entre el 26 de julio y el 11 de agosto de 2024 en la ciudad de París, Francia. ",
    "La ruta termina en el Trocadéro para un gran final. El espectáculo será sin duda inolvidable. ¡Nos vemos el 26 de julio de 2024! La parte baja de la avenida de los Campos Elíseos y la plaza de la Concorde serán el escenario de la ceremonia de apertura de los Juegos Paralímpicos de París 2024, el 28 de agosto.",
    "El nombre de la mascota de París 2024 es Phryge olímpica, que viene de los tradicionales y pequeños gorros frigios (bonnet phrygien, en francés), de donde las mascotas toman su forma.",
    "El logo de París 2024 ha adoptado un color dorado que recuerda a las medallas del primer premio de la ceremonia, mientras que la forma imita la icónica llama olímpica para reflejar la energía única de los Juegos, que unen a las personas e impulsan soluciones",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <FlatList
        ref={flatListRef}
        data={carruselImagenes}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width: ANCHO_CONTENEDOR + ESPACIO * 6 }}>
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.posterImage} />
            </View>
          </View>
        )}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.floor(offset / ANCHO_CONTENEDOR) % carruselImagenes.length;
          scrollX.setValue(ANCHO_CONTENEDOR * (index + 1));
        }}
      />
      <View style={styles.gridContainer}>
        {textBlocks.map((text, index) => (
          <View key={index} style={styles.textBlock}>
            <Text style={styles.description}>{text}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  searchBox: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
  imageContainer: {
    marginHorizontal: ESPACIO,
    padding: ESPACIO,
    borderRadius: 34,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * .7,
    resizeMode: "cover",
    borderRadius: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  textBlock: {
    width: 175,
    height: 225,
    margin: 4,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, // Agregar un borde
    borderColor: 'black',
    
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default HomeScreen;
