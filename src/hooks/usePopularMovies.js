import {useQuery} from '@tanstack/react-query'
import api from '../utils/api';

const fetchPopularsMovies = () => {
    return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularsMovies,
        select: (result) => result.data,
    });
};