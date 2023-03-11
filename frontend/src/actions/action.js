import axios from 'axios';

const baseURL = "http://localhost:8000/api/post";

export async function makePost(postData) {
    const {data} = await axios.post(baseURL, postData)
    return data;
}

export async function fetchAllPost(page) {
    const {data} = await axios.get(baseURL+"?page="+page);
    // console.log(data);
    return data;
}