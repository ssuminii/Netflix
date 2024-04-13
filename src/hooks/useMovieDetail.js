import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieDetail = () => {
    return api.get(`/movie`);
}
export const useMovieDetailQuery = () => {
    return useQuery({
        queryKey: ['movie-detail'], 
        queryFn: () => fetchMovieDetail(),
    })
}