import { fetchSinglePost } from "@/actions/action";
import { querySingleData } from "@/helpers/query";
import { Container, Heading, Text, useQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ErrorComponent from "../components/ErrorComponent";
import Preloader from "../components/Preloader";

export default function Show() {

    const router = useRouter();
    const {slug} = router.query;
    const [data,setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const {isLoading, data,error, isError} = querySingleData(() => fetchSinglePost(slug));

    useEffect(() => {
        if(router.isReady) {
            setLoading(true);
            fetchSinglePost(slug)
            .then(res => {
                setData(res.data)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
        }
    }, [router.isReady])
    console.log(data);

    if(loading) {
        return <Preloader />
    } else if (error) {
        return <ErrorComponent error={error} />
    } else {

    return (
        <Container maxW="container.lg">
            <Heading>{data?.title}</Heading>
            <Text maxW="30%">{data?.body}</Text>
        </Container>

    );
}
}