import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchMovie = ({keyword, page}) => {
    return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`) // keyword가 있으면
    : api.get(`/movie/popular?page=${page}`); // 없으면 popular movie 보여주기
}
export const useSearchMovieQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['movie-search', {keyword, page}],    // keyword에 따라 url이 달라짐
        queryFn: () => fetchSearchMovie({keyword, page}),
        select: (result) => result.data,
    })
}