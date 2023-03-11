import { makePost } from '@/actions/action';
import mutation from '@/helpers/mutation';
import { Button, Container, Flex, Heading, Input, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from "react-hook-form";


export default function Create() {
    const mutations = mutation(makePost);
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const [pageData, setPageData] = useState(router.query?.type);

    const hanSubmit = (data) => {
        mutations.mutate(data);
    }

    return <Container>
        <form onSubmit={handleSubmit(hanSubmit)}>
        <Flex alignItems="center" flexDirection="column">
            <Heading marginY="1rem" as="h1" size="xl" >{pageData} Post</Heading>
            <Input placeholder='Title' marginY="1rem" {...register("title", {required:true})}/>
            <Textarea placeholder='Body'marginY="1rem" {...register("body", {required:true, min:10})}/>
            <Button {...(mutations.isLoading ? {isLoading:true, loadingText:"Processing"} : {})} colorScheme='linkedin' mt="2rem" type='submit'>Add</Button>
            
        </Flex>
        </form>
    </Container>
}