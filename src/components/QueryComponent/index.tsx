"use client"

import {useQuery} from "@tanstack/react-query";
import {testApi} from "@/api";

function QueryComponent() {
    const { data } = useQuery({
        queryKey: ["test"],
        queryFn: async () => {

            return testApi();
        }});

    console.log(data);
    return(
        <>
            {data}
        </>
    )


}

export default QueryComponent;