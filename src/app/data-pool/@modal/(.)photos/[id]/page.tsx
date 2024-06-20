import {Modal} from "@/components/Modal/modal";

export default function PhotoModal({
                                       params
                                   }: {
    params: { id: string };
}) {
    return <div>{params.id}</div>;
}