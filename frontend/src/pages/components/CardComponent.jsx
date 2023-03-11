import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function CardComponent({data}) {
    return (
        <Card>
          <CardHeader>
            <Heading size='md'>{data.title}</Heading>
          </CardHeader>
          <CardBody>
            <Text noOfLines={6}>{data.body}</Text>
          </CardBody>
          <CardFooter>
            <Button>View</Button>
          </CardFooter>
        </Card>
    )
}