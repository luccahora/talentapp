import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import {
  MovieItem,
  MovieTitle,
  MovieOverview,
  Container,
  MovieImage,
  MovieDetails,
  Title,
} from "./styles";
import { getPopularMovies } from "../../services/api";

export function Saved() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const movies = await getPopularMovies();
      setMovies(movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const renderMovieItem = ({ item }) => (
    <MovieItem>
      <MovieImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
        resizeMode="cover"
      />
      <MovieDetails>
        <MovieTitle>{item.title}</MovieTitle>
        <MovieOverview>{item.overview}</MovieOverview>
      </MovieDetails>
    </MovieItem>
  );

  return (
    <Container>
      <Title>Popular movies</Title>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
}
