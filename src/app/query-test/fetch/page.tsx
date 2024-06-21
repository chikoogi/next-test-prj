import {QueryClient} from "@tanstack/query-core";
import {testApi} from "@/api";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import QueryComponent from "@/components/QueryComponent";

async function FetchComponent() {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["test"],
        queryFn: testApi
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {/*<QueryComponent />*/}
        </HydrationBoundary>
    )


}
export default FetchComponent;