export default function ErrorComponent({error}) {
    return (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Something Wrong</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
    )
}