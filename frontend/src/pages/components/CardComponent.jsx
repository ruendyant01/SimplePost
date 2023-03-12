import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export default function CardComponent({data, hanDelete}) {

    return (
        <LinkBox>
        <Card h={350}>
          <CardHeader>
            <LinkOverlay href={"/post/"+data.slug}>
              <Heading size='md'>{data.title}</Heading>
            </LinkOverlay>
          </CardHeader>
          <CardBody>
            <Text noOfLines={5}>{data.body}</Text>
          </CardBody>
          <CardFooter>
              <Button mr="auto">View</Button>
              <Button onClick={() => hanDelete(data.slug)}><DeleteIcon color="red" /></Button>
          </CardFooter>
        </Card>
        </LinkBox>
    )
}