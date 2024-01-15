import useApi from "@composables/useApi";
import { GET_MOVIES_GENRES } from "../movies.api";
import { useMoviesStore } from "..";

export const useMovieFavorites = () => {
  const moviesState = useMoviesStore();
  
  return {
    /**
     * Get Movies genres
     * @param genre
     * @param page
     */
    async getGenres(genre: number[], page: number = 1) {
      try {
        moviesState.loading = true;
          const response = await useApi(GET_MOVIES_GENRES, {
            query: {
              with_genres: !genre.includes(0) ? genre.join("|") : null,
              page: page,
            }
          });
          if (response.isSuccess) {
            if (page <= moviesState.currentPage) moviesState.moviesGenres = response.data.results;
            else moviesState.moviesGenres = moviesState.moviesGenres.concat(response.data.results);
            if (response.data.total_pages === page) moviesState.end = true;
            else moviesState.end = false;
            moviesState.currentPage = page;
          }
          moviesState.loading = false;
      } catch (e) {
          console.error(e);
      }
    },
  }
};
