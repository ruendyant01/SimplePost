import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ErrorComponent({error}) {
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
      if(error.code === "ERR_NETWORK") {
        setErrorMsg(error.message)
      } else {
        setErrorMsg(error.response.statusText);
      }
    }, [])

    return (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Something Wrong</AlertTitle>
          <AlertDescription>{errorMsg}</AlertDescription>
        </Alert>
    )
}