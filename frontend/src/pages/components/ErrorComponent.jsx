import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ErrorComponent({error, type}) {
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
      if(type !== "message") {
        if(error.code === "ERR_NETWORK") {
          setErrorMsg(error.message)
        } else if (type === "message") {
  
        } else {
          setErrorMsg(error.response.statusText);
        }
      }
    }, [])

    return (
      <>
        {
          type === "message" ? 
          <Alert status='error'>
            <AlertIcon />
            <AlertDescription>{error}</AlertDescription>
          </Alert> : 
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Something Wrong</AlertTitle>
          <AlertDescription>{errorMsg}</AlertDescription>
        </Alert>
        }
      </>
        
    )
}