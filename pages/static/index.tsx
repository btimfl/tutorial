import { Center, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { fetchData } from "../../apis/get";

interface Props {
    data: string;
}

export default function Static({ data }: Props) {
    return (
        <Center bg="#121212" h="100vh">
            <Text color="white" fontSize="5rem"><Text as="span" color="orange">{data}</Text> is {data === 'Jatin' ? 'not' : ''} a good {data === 'Sanchi' ? 'girl' : 'boy'}</Text>
        </Center>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const data: { id: string, data: string }[] = await fetchData();

    const randomNumberFrom1To9 = Math.floor(Math.random() * 9);

    return {
        props: {
            data: data[randomNumberFrom1To9].data,
        }
    }
}