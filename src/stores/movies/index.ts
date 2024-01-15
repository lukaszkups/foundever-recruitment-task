import { defineStore } from "pinia";
import { LOCALSTORAGE_MOVIES_FAVORITES } from "@/app.storages";
import { TMovieData } from "@/types/movies";
import { reactive, ref } from "vue";

export const useMoviesStore = defineStore('movies', () => {
  const favorites = reactive(
    localStorage.getItem(LOCALSTORAGE_MOVIES_FAVORITES)
      ? (JSON.parse(
          localStorage.getItem(LOCALSTORAGE_MOVIES_FAVORITES) as string
      ) as TMovieData[])
      : ([] as TMovieData[])
  );

  const moviesTrends = ref([]);
  const moviesGenres = ref([]);
  const error = ref('');
  const loading = ref(false);
  const currentPage = ref(1);
  const end = ref(false);

  return {
    favorites,
    moviesTrends,
    moviesGenres,
    error,
    loading,
    currentPage,
    end
  }
});
