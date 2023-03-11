import { fetchSinglePost } from "@/actions/action";
import { querySingleData } from "@/helpers/query";
import { Button, ButtonGroup, Container, Flex, Heading, Text, useQuery } from "@chakra-ui/react";
import Link from "next/link";
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

    if(loading) {
        return <Preloader />
    } else if (error) {
        return <ErrorComponent error={error} />
    } else {

    return (
        <Container maxW="container.md">
            <Flex justifyContent="space-between">
                <Heading mb={10}>{data?.title}</Heading>
                <ButtonGroup spacing={8} variant="outline">
                    <Button colorScheme="yellow"><Link href={'/edit/'+data?.slug}>Edit</Link></Button>
                    <Button colorScheme="red">Delete</Button>
                </ButtonGroup>
            </Flex>
            <Text maxW="60%">{data?.body}</Text>
        </Container>

    );
}
}