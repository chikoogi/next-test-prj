import {ReactNode, Suspense} from "react";

function testPostLayout({children}: {children: ReactNode}) {
    return <>
        <Suspense fallback={<div> ...Loading</div>}>
            {children}
        </Suspense>
    </>
}

export default testPostLayout;