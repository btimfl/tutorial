import { fetchData } from "../../apis/get";

interface Props {
    data: string;
}

export default function Server({ data }: Props) {
    return <>Data received from API: {data}</>
}

export async function getServerSideProps() {
    const data: { id: string, data: string }[] = await fetchData();

    const randomNumberFrom1To50 = Math.floor(Math.random() * 50);

    return {
        props: {
            data: data[randomNumberFrom1To50].data,
        }
    }
}