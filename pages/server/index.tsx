import { GetServerSideProps } from "next";
import { fetchData } from "../../apis/get";

interface Props {
    data: string;
}

export default function Server({ data }: Props) {
    return <>Data received from API: {data}</>
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const data: { id: string, data: string }[] = await fetchData();

    const randomNumberFrom1To50 = Math.floor(Math.random() * 50);

    return {
        props: {
            data: data[randomNumberFrom1To50].data,
        }
    }
}