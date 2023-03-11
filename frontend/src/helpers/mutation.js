import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";


export default function mutation(action) {
    const toast = useToast();
    return useMutation(action, {
        onSuccess: (data,variables,context) => {
            toast({
                title: data,
                status: "success",
                duration: 9000,
                isClosable: true,
              })
        },
        onError: (err,variables,context) => {
            toast({
                title: err.response.data.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    })
}