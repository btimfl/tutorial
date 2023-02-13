import { GetStaticProps } from "next";
import { fetchData } from "../../apis/get";

type Props = {
    data: string,
}

export default function Incremental({ data }: Props) {
    return <>Data received from API: {data}</>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const data: { id: string, data: string }[] = await fetchData();

    const randomNumberFrom1To50 = Math.floor(Math.random() * 50);

    return {
        props: {
            data: data[randomNumberFrom1To50].data,
        },
        revalidate: 10,
    }
}