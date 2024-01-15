import { LOCALSTORAGE_MOVIES_FAVORITES } from "@/app.storages";
import { TMovieData } from "@/types/movies";
import { useMoviesStore } from "..";

export const useMovieFavorites = () => {
  const moviesState = useMoviesStore();
  
  return {
    /**
    * Add to favorites
    * @param movie
    */
    addFavorite(movie: TMovieData) {
      moviesState.favorites.push(movie);
      localStorage.setItem(
        LOCALSTORAGE_MOVIES_FAVORITES,
        JSON.stringify(moviesState.favorites)
      );
    },
    /**
    * Remove from favorites
    * @param movie
    */
    removeFavorite(movie: TMovieData) {
      moviesState.favorites = moviesState.favorites.filter(
        (e: TMovieData) => e.id !== movie.id
      );
      localStorage.setItem(
        LOCALSTORAGE_MOVIES_FAVORITES,
        JSON.stringify(moviesState.favorites)
      );
    }
  }
}
