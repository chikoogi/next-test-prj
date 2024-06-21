"use client"

import {testApi} from "@/api";
import {useQuery} from "@tanstack/react-query";

export default function Posts() {
    // This useQuery could just as well happen in some deeper
    // child to <Posts>, data will be available immediately either way
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => {
            console.log("client");
            return testApi();
        },
    })

    // This query was not prefetched on the server and will not start
    // fetching until on the client, both patterns are fine to mix.
/*
    const { data: commentsData } = useQuery({
        queryKey: ['posts-comments'],
        queryFn: getComments,
    })
*/

    // ...

    console.log(data)

    return (
        <>{"data.toString()"}</>
    )
}