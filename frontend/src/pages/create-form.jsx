import { makePost } from '@/actions/action';
import mutation from '@/helpers/mutation';
import { Button, Container, Flex, Heading, Input, Textarea } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorComponent from './components/ErrorComponent';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Create() {
    const mutations = mutation(makePost);
    const router = useRouter();

    const schemas = yup.object({
        title: yup.string().required(),
        body: yup.string().min(10).required()
    }).required();

    const {reset,register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schemas)
    });

    const hanSubmit = (data) => {
        mutations.mutate(data, {
            onSuccess: () => {
                router.push("/");
            }
        });
        reset();
    }

    return <Container>
        <form onSubmit={handleSubmit(hanSubmit)}>
        <Flex alignItems="center" flexDirection="column">
            <Heading marginY="1rem" as="h1" size="xl" >Create Post</Heading>
            <Input as="input" {...(errors.title?.message && {isInvalid:true})} placeholder='Title' marginY="1rem" {...register("title")}/>
            {errors.title?.message && <ErrorComponent type="message" error={errors.title.message} />}
            <Textarea as="textarea" placeholder='Body'marginY="1rem" {...register("body")}/>
            {errors.body?.message && <ErrorComponent type="message" error={errors.body.message} />}
            <Button {...(mutations.isLoading ? {isLoading:true, loadingText:"Processing"} : {})} colorScheme='linkedin' mt="2rem" type='submit'>Add</Button>
        </Flex>
        </form>
    </Container>
}