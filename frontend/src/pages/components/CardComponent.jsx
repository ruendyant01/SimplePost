import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export default function CardComponent({data}) {
    return (
        <LinkBox>
        <Card>
          <CardHeader>
            <LinkOverlay href={"/post/"+data.slug}>
              <Heading size='md'>{data.title}</Heading>
            </LinkOverlay>
          </CardHeader>
          <CardBody>
            <Text noOfLines={6}>{data.body}</Text>
          </CardBody>
          <CardFooter>
              <Button mr="auto">View</Button>
              <Button>View</Button>
          </CardFooter>
        </Card>
        </LinkBox>
    )
}