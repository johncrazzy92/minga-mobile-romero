import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { allMangas } from '../redux/actions/allMangas';

const AllMangas = () => {
  const dispatch = useDispatch();
  const mangasList = useSelector(store => store.mangas.mangas);
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
      dispatch(allMangas());
    }, []); 
    
    useEffect(() => {
        if (mangasList) {
            const formattedMangas = mangasList.map(manga => ({
                id: manga._id,
                uri: manga.cover_photo,
                title: manga.title,
            }));
            setMangas(formattedMangas);
    }
  }, [mangasList]);

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const numColumns = 2;
  const imageHeight = screenHeight * 0.43;
  const imageWidth = screenWidth * 0.48;

  const renderItem = ({ item }) => (
    <View style={[styles.card, { height: imageHeight, width: imageWidth }]}>
      <ImageBackground
        source={{
          uri: item.uri,
        }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mangas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: "#0c0d1e"
  },
  card: {
    flexDirection: 'column',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 5,
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default AllMangas;
