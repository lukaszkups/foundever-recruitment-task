import useApi from "@composables/useApi";
import { GET_MOVIES_POPULAR } from "../movies.api";
import { useMoviesStore } from ".."

export const useMovieTrends = () => {
  const moviesState = useMoviesStore();

  return {
    /**
    * Get movies trends
    */
    async getTrends() {
      try {
        moviesState.loading = true;
        const response = await useApi(GET_MOVIES_POPULAR);
        if (response.isSuccess) {
          moviesState.moviesTrends = response.data.results.slice(0, 4);
        }
        moviesState.loading = false;
      }
      catch(e) {
        console.error(e);
      }
    }
  }
}