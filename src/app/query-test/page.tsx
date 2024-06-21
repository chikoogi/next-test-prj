import QueryComponent from "@/components/QueryComponent";
import FetchComponent from "@/app/query-test/fetch/page";
import {Suspense} from "react";

function queryTestPage() {


    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <FetchComponent />
            </Suspense>

        </div>)
}

export default queryTestPage;