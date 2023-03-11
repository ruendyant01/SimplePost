import { useQuery } from "react-query";


export default function queryData(action) {
    return useQuery("posts", action);
}