import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

const ListOfMovies = ({ navigation }) => {
  const startingDataSource = [
    { "title": "Elf", "releaseYear": "2003" },
    { "title": "The Grinch", "releaseYear": "1966" },
    { "title": "Die Hard", "releaseYear": "1988" },
    { "title": "Home Alone", "releaseYear": "1990" },
    { "title": "A Christmas Story", "releaseYear": "1983" }
  ];

  const [movies, setMovies] = useState(startingDataSource);

  const fetchMoviesFromAPI = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const data = await response.json();
      const newMovies = data.movies; // Array of movies from the API response
      setMovies(prevMovies => [...prevMovies, ...newMovies]); // Concatenating new movies to the existing movies array
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const navigateToMovieDetails = (title) => {
    navigation.navigate('MovieDetails', { title });
  };
  //navigation.navigate (send all details)
  return (
    <View style={styles.container}>     
      <Text>Movie List:</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View style={styles.border}>
            <Button title={item.title} onPress={() => navigateToMovieDetails(item.title)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        extraData={movies}
      />
      <View style={styles.loadMoreButtonContainer}>
        <Button title="Load More" onPress={fetchMoviesFromAPI} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  border: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
  loadMoreButtonContainer: {
    marginTop: 20,
  },
});

export default ListOfMovies;
