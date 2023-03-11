import { Spinner } from "@chakra-ui/react";


export default function Preloader() {
    return (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          position="fixed"
          top="50%"
          left="50%"
        />
    )
}