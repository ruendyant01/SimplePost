import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";


export default function mutation(action) {
    const toast = useToast();
    return useMutation(action, {
        onSuccess: (data) => {
            toast({
                title: data,
                status: "success",
                duration: 2000,
                isClosable: true,
              })
        },
        onError: (err) => {
            toast({
                title: err.response.data.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
        }
    })
}