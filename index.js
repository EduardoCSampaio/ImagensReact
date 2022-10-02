
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  PrimeiraImagem: {
    width: 250,
    height: 250,
  },
  SegundaImagem: {
    width: 250,
    height: 250,
  },
  TerceiraImagem: {
    width: 250,
    height: 250,
  },
});

const ProjetoDS = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.PrimeiraImagem}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        style={styles.TerceiraImagem}
        source={{
          uri: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
        }}
      />
      
         <Image
        style={styles.SegundaImagem}
        source={{
          uri: 'https://img.estadao.com.br/thumbs/640/resources/jpg/8/6/1568728982468.jpg',
        }}
      />
    </View>
  );
}

export default ProjetoDS;
