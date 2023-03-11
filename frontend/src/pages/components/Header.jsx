import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <Box bg='lightBlue' w='100%' h="50%" p={8} mb={20} color='white'>
                <Heading as="h1" size="4xl" fontSize="1.7rem">
                    <Link href="/">Post App</Link>
                </Heading>
            </Box>
        </>
    );
}