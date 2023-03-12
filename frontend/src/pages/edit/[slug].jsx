import { fetchAllPost, fetchSinglePost, updatePost } from '@/actions/action';
import mutation from '@/helpers/mutation';
import { Button, Container, Flex, Heading, Input, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ErrorComponent from '../components/ErrorComponent';
import Preloader from '../components/Preloader';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export default function Edit() {
    const {isLoading, mutate} = mutation(updatePost);
    const router = useRouter();
    const {slug} = router.query;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    const schemas = yup.object({
        title: yup.string().required(),
        body: yup.string().min(10).required()
    }).required();

    useEffect(() => {
        if(router.isReady) {
            fetchSinglePost(slug)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }
    }, [router.isReady])


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemas)
    });

    const hanSubmit = (datas) => {
        mutate({datas, slug:data.slug}, {
            onSuccess: () => {
                router.push("/");
            }
        });
    }

    if(loading || !data) {
        return <Preloader />
    } else if(error) {
        return <ErrorComponent error={error} />
    } else {

    return <Container>
        <form onSubmit={handleSubmit(hanSubmit)}>
        <Flex alignItems="center" flexDirection="column">
            <Heading marginY="1rem" as="h1" size="xl" >Edit Post</Heading>
            <Input placeholder='Title' defaultValue={data?.title} marginY="1rem" {...register("title", {required:true})}/>
            {errors.title?.message && <ErrorComponent type="message" error={errors.title.message} />}
            <Textarea placeholder='Body'marginY="1rem" defaultValue={data?.body} {...register("body", {required:true, min:10})}/>
            {errors.body?.message && <ErrorComponent type="message" error={errors.body.message} />}
            <Button {...(isLoading ? {isLoading:true, loadingText:"Processing"} : {})} colorScheme='yellow' mt="2rem" type='submit'>Edit</Button>
        </Flex>
        </form>
    </Container>
}
}