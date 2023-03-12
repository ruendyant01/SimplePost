import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button, Container, Flex, HStack, SimpleGrid, Spacer, Icon, Box, Heading } from '@chakra-ui/react'
import CardComponent from './components/CardComponent'
import Link from 'next/link'
import { deletePost, fetchAllPost } from '@/actions/action'
import Preloader from './components/Preloader'
import ErrorComponent from './components/ErrorComponent'
import { ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { paginateQuery } from '@/helpers/query'
import { useEffect, useState } from 'react'
import mutation from '@/helpers/mutation'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(router.query?.page ? router.query.page : 1)
  const {isLoading, data, error, isError} = paginateQuery(fetchAllPost, page);
  const mutations = mutation(deletePost);

  const hanDelete = (slug) => {
    mutations.mutate(slug, {
      onSuccess:() => {
        router.reload("/");
        data.data = data.data.filter(val => val.slug !== slug)
      }
    })
  }

  const nextPage = () => {
    setPage(page+1);
  }

  const prevPage = () => {
    setPage(page-1);
  }

  if(isLoading) {
    return <Preloader />
  } else if(isError) {
    return <ErrorComponent error={error} /> 
  } else {

  return (
    <>
      <Head>
        <title>Post App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.xl">
        <Flex flexDirection='column'>
        <Button mb={10} px={10} colorScheme="telegram" alignSelf="flex-end">
          <Link href="/create-form">+Create</Link>
        </Button>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {
          data.data.map(val => {
            return <CardComponent data={val} key={val.id} hanDelete={hanDelete}/>
          })
        }
      </SimpleGrid>
        <HStack spacing={10} mt={10} alignSelf="center">
          <Button as="button" onClick={prevPage} isDisabled={!data.prev_page_url}><ArrowLeftIcon /></Button>
          <Heading color="black" size="md">{data.current_page}</Heading>
          <Button as="button" onClick={nextPage} isDisabled={!data.next_page_url}><ArrowRightIcon /></Button>
        </HStack>
      </Flex>
      </Container>
      </main>
    </>
  )
}
}