import { useQuery } from "react-query";


export function querySingleData(action) {
    return useQuery("posts", action);
}

export function paginateQuery(action, page) {
    return useQuery(["posts", page], () => action(page), {keepPreviousData:true})
}